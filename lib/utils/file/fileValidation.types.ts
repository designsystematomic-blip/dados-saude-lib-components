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
