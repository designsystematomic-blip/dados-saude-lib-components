export interface ImageValidationResult {
  isValid: boolean;
  error?: string;
  details?: {
    width?: number;
    height?: number;
    size?: number;
    format?: string;
  };
}

export interface ValidationOptions {
  maxWidth?: number;
  maxHeight?: number;
  minWidth?: number;
  minHeight?: number;
  maxSize?: number; // em bytes
  allowedFormats?: string[];
}

// Assinaturas de arquivos (magic numbers) para diferentes formatos de imagem
const IMAGE_SIGNATURES = {
  'image/jpeg': [
    [0xFF, 0xD8, 0xFF], // JPEG
  ],
  'image/png': [
    [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A], // PNG
  ],
  'image/gif': [
    [0x47, 0x49, 0x46, 0x38, 0x37, 0x61], // GIF87a
    [0x47, 0x49, 0x46, 0x38, 0x39, 0x61], // GIF89a
  ],
  'image/webp': [
    [0x52, 0x49, 0x46, 0x46], // RIFF (início do WEBP)
  ],
  'image/bmp': [
    [0x42, 0x4D], // BM
  ],
  'image/tiff': [
    [0x49, 0x49, 0x2A, 0x00], // II (little-endian)
    [0x4D, 0x4D, 0x00, 0x2A], // MM (big-endian)
  ],
  'image/svg+xml': [
    [0x3C, 0x3F, 0x78, 0x6D, 0x6C], // <?xml
    [0x3C, 0x73, 0x76, 0x67], // <svg
  ],
	'application/pdf': [
		[0x25, 0x50, 0x44, 0x46], // %PDF
		[0x45, 0x4E, 0x44, 0x5F, 0x50, 0x44, 0x46], // END_PDF
	],
};

/**
 * Valida se o arquivo é uma imagem válida através da assinatura do arquivo
 */
export async function validateImageSignature(file: File): Promise<boolean> {
  try {
    const arrayBuffer = await file.slice(0, 20).arrayBuffer();
    const bytes = new Uint8Array(arrayBuffer);
    
    const signatures = IMAGE_SIGNATURES[file.type as keyof typeof IMAGE_SIGNATURES];
    if (!signatures) return false;
    
    return signatures.some(signature => {
      return signature.every((byte, index) => bytes[index] === byte);
    });
  } catch (error) {
    console.error('Erro ao validar assinatura da imagem:', error);
    return false;
  }
}

/**
 * Valida se a imagem pode ser carregada corretamente
 */
export function validateImageLoad(file: File): Promise<ImageValidationResult> {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    
    const cleanup = () => {
      URL.revokeObjectURL(url);
    };
    
    img.onload = () => {
      cleanup();
      resolve({
        isValid: true,
        details: {
          width: img.naturalWidth,
          height: img.naturalHeight,
          size: file.size,
          format: file.type,
        }
      });
    };
    
    img.onerror = () => {
      cleanup();
      resolve({
        isValid: false,
        error: 'Imagem corrompida ou formato inválido',
        details: {
          size: file.size,
          format: file.type,
        }
      });
    };
    
    // Timeout de 10 segundos para evitar travamento
    setTimeout(() => {
      cleanup();
      resolve({
        isValid: false,
        error: 'Timeout ao carregar imagem - arquivo muito grande ou corrompido',
        details: {
          size: file.size,
          format: file.type,
        }
      });
    }, 10000);
    
    img.src = url;
  });
}

/**
 * Validação completa de imagem
 */
export async function validateImage(
  file: File, 
  options: ValidationOptions = {}
): Promise<ImageValidationResult> {
  const {
    maxWidth = 8000,
    maxHeight = 8000,
    minWidth = 10,
    minHeight = 10,
    maxSize = 10 * 1024 * 1024, // 10MB
    allowedFormats = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/bmp', 'image/tiff', 'image/svg+xml', 'application/pdf']
  } = options;

  // 1. Validar tipo MIME
  if (!allowedFormats.includes(file.type)) {
    return {
      isValid: false,
      error: `Formato não suportado: ${file.type}. Formatos aceitos: ${allowedFormats.join(', ')}`
    };
  }

  // 2. Validar tamanho do arquivo
  // if (file.size > maxSize) {
  //   return {
  //     isValid: false,
  //     error: `Arquivo muito grande: ${(file.size / 1024 / 1024).toFixed(2)}MB. Máximo permitido: ${(maxSize / 1024 / 1024).toFixed(2)}MB`
  //   };
  // }

  if (file.size === 0) {
    return {
      isValid: false,
      error: 'Arquivo vazio'
    };
  }

  // 3. Validar assinatura do arquivo
  const hasValidSignature = await validateImageSignature(file);
  if (!hasValidSignature) {
    return {
      isValid: false,
      error: 'Arquivo corrompido - assinatura inválida'
    };
  }

	if (file.type === 'application/pdf') {
		// Para PDFs, não validamos dimensões
		return {
			isValid: true,
			details: {
				size: file.size,
				format: file.type,
			}
		};
	}

  const loadResult = await validateImageLoad(file);
  if (!loadResult.isValid) {
    return loadResult;
  }

  const { width, height } = loadResult.details!;
  
  if (width! < minWidth || height! < minHeight) {
    return {
      isValid: false,
      error: `Imagem muito pequena: ${width}x${height}px. Mínimo: ${minWidth}x${minHeight}px`,
      details: loadResult.details
    };
  }

  if (width! > maxWidth || height! > maxHeight) {
    return {
      isValid: false,
      error: `Imagem muito grande: ${width}x${height}px. Máximo: ${maxWidth}x${maxHeight}px`,
      details: loadResult.details
    };
  }

  return {
    isValid: true,
    details: loadResult.details
  };
}

/**
 * Hook para validação de múltiplas imagens
 */
export async function validateImages(
  files: File[], 
  options?: ValidationOptions
): Promise<Map<string, ImageValidationResult>> {
  const results = new Map<string, ImageValidationResult>();
  
  const validationPromises = files.map(async (file) => {
    const result = await validateImage(file, options);
    results.set(file.name, result);
    return { file, result };
  });
  
  await Promise.all(validationPromises);
  return results;
}