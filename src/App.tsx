import { Button, Modal, Snackbar, Text, UploadFile, Wrapper } from "@lib/components";
import {  IconUploadFile } from "@lib/icons";
import { validateImage } from "@lib/utils";
import { useCallback, useEffect, useState } from "react";

function App() {

  const [files, setFiles] = useState<File[]>([]);
	const [errors, setErrors] = useState<string[]>([]);

  const [openModal, setOpenModal] = useState<boolean>(false);

  const [process, setProcess] = useState<number>(0);

  console.log('process', process)

  const handleFiles = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {

    const newFiles = e.target.files ? Array.from(e.target.files) : [];

    for (let i = 0; i < newFiles.length; i++) {
      const file = newFiles[i];

      try {

        const fileCheck = await validateImage(file, {
          maxWidth: 4000,
          maxHeight: 4000,
          minWidth: 50,
          minHeight: 50,
          maxSize: 5 * 1024 * 1024, // 5MB
          allowedFormats: ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'application/pdf']
        });

        if (!fileCheck.isValid) {
          setErrors(prev => [...prev, `${file.name}: ${fileCheck.error}`]);
        } else {
          setFiles(prev => [...prev, file]);
        }

      } catch (error) {
        console.log('Error', error);
      }
    }

  }

  const handleChangeFiles = useCallback((): void => {
    setOpenModal(!openModal);
  }, [openModal]);

  const handleValidationError = useCallback((file: File, error: string) => {
    setErrors(prev => [...prev, `${file.name}: ${error}`]);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpenModal(!open);
      }
    };

    // Add event listener when component mounts or isOpen changes
    document.addEventListener('keydown', handleKeyDown);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]); 

  console.log('openModal', openModal)

  return (
    <>
      <Snackbar
        isOpen={errors.length > 0}
        onClose={() => setErrors([])}
        type="error"
        content={
          <>
          {errors.map((error) => (
            <Text 
              content={error}
            />
          ))}
          </>
        }
      />

      <Snackbar 
        type="success"
        isOpen={files.length > 0 && process === 100}
        onClose={() => setFiles([])}
        content={`Upload de ${files.length} arquivo(s) realizado com sucesso!`}
      />
      
      <UploadFile.Root>
        {files.length === 0 ? (
          <UploadFile.Input
            icon={<IconUploadFile fillColor="var(--button-bg-primary)"/>}
            label="Selecione as fotos da galeria"
            name="file" 
            id="file" 
            accept="image/*,application/pdf"
            acceptDescription="PNG, JPG ou PDF"
            multiple 
            onChange={handleFiles}
            buttonColor="var(--button-bg-primary)"
            acceptDescriptionColor="var(--color-quintenary)"
            filesList={files}
          />
        ) : (
          <UploadFile.Root>
            <UploadFile.State uploadState={process === 100 ? 'success' : 'loading'} />
            <UploadFile.LoadingBar
              onChange={(progress) => setProcess(progress)}
              showPercentage={true}
              files={files}
              loadingMessage="Carregando..."
              loadedMessage="Carregamento completo"
            />
            <Wrapper style={{ display: 'flex', gap: '4px', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}>
              <Button 
                variant="tertiary" 
                label="Trocar fotos"
                type="button"
                onClick={handleChangeFiles}
              />
              <Text variant="secondary" size="medium" color="var(--color-quintenary)" content="ou"/>
              <UploadFile.Input 
                label="Adicionar mais fotos"
                name="Adicionar mais fotos"
                id="add-more-files"
                accept="image/*"
                buttonColor="var(--bg-primary)"
                size="medium"
                onChange={handleFiles}
                isDisabled={process !== 100}
              />
            </Wrapper>

            {process === 100 && files.map((file, index) => (
              <UploadFile.Root key={index}>
                <Text variant="secondary" size="medium" color="var(--color-quintenary)" content={file.name} />
              </UploadFile.Root>
            ))}

          </UploadFile.Root>
        )}

        {openModal && (
          <Modal 
            id="upload-file-preview" 
            isOpen={openModal} 
            onClose={() => setOpenModal(false)} 
            width="large"
            customClassName="round"
          >
          <UploadFile.Preview
            title={`Pré-visualização dos arquivos (${files.length})`}
            files={files}
            onRemove={(file) => setFiles(prev => prev.filter(f => f.name !== file.name))}
          />
          </Modal>
        )}

      </UploadFile.Root>
    </>
  );
}

export default App;
