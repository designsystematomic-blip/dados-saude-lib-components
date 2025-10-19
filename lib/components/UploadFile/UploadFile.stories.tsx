import { useDialog } from "@lib/hooks";
import { IconUploadFile } from "@lib/icons";
import { validateImage } from "@lib/utils";
import { Meta, StoryObj } from "@storybook/react";
import { useCallback, useState } from "react";
import Button from "../Button";
import Camera from "../Camera";
import Divider from "../Divider";
import Modal from "../Modal";
import Snackbar from "../Snackbar";
import Text from "../Text";
import Wrapper from "../Wrapper";
import UploadFile from "./";

const UploadFileMounted = () => {
	const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const modalPreviewId = 'modal-upload-file-preview';
  const modalCameraId = 'modal-camera';

  const { multiDialog, openDialog, closeDialog } = useDialog();

  const [process, setProcess] = useState<number>(0);

  const handleFiles = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
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
          allowedFormats: [
            'image/jpeg',
            'image/png',
            'image/gif',
            'image/webp',
            'application/pdf',
          ],
        });

        if (!fileCheck.isValid) {
          setErrors((prev) => [...prev, `${file.name}: ${fileCheck.error}`]);
        } else {
          setFiles((prev) => [...prev, file]);
        }
      } catch (error) {
        console.log('Error', error);
      }
    }
  };

  const handleTakePhotos = useCallback((): void => {
    openDialog(modalCameraId);
  }, [openDialog]);

  const handleChangeFiles = useCallback((): void => {
    openDialog(modalPreviewId);
  }, [openDialog]);

	return (
		<>
      <Snackbar
        isOpen={errors.length > 0}
        onClose={() => setErrors([])}
        type="error"
        content={
          <>
            {errors.map((error) => (
              <Text content={error} />
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
      <Wrapper style={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        flexFlow: 'wrap',
        gap: '8px',
        padding: '16px',
        border: '1px dashed var(--color-border-primary)',
        borderRadius: '20px',
      }}>
        <UploadFile.Root>
          {files.length === 0 ? (
            <Wrapper style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							gap: '16px',
							flexWrap: 'wrap',
						}}>
              <UploadFile.Input
                icon={<IconUploadFile fillColor="var(--button-bg-primary)" />}
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
								fontFamily="primary"
              />
              <Divider 
                color="var(--color-border-primary)"
                children={
                  <Text 
                    content="ou" 
                    fontFamily="secondary" 
                    textColor="var(--color-border-primary)" 
                    textSize="medium"
                  />
                }
                borderLeft={true}
                borderRight={true}
              />
              <Button
                variant="primary"
                label="Tirar fotos"
                type="button"
                onClick={handleTakePhotos}
              />
            </Wrapper>
          ) : (
            <UploadFile.Root>
              <UploadFile.State
                uploadState={process === 100 ? 'success' : 'loading'}
              />
              <UploadFile.LoadingBar
                onChange={(progress) => setProcess(progress)}
                showPercentage={true}
                files={files}
                loadingMessage="Carregando..."
                loadedMessage="Carregamento completo"
              />
              <Wrapper
                style={{
                  display: 'flex',
                  gap: '4px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '16px',
                }}
              >
                <Button
                  variant="tertiary"
                  label="Trocar fotos"
                  type="button"
                  onClick={handleChangeFiles}
                />
                <Text
                  fontFamily="secondary"
                  textSize="medium"
                  textColor="var(--color-quintenary)"
                  content="ou"
                />
                <UploadFile.Input 
                  label="Adicionar mais fotos"
                  name="Adicionar mais fotos"
                  id="add-more-files"
                  accept="image/*"
                  buttonColor="var(--bg-primary)"
                  textSize="medium"
                  onChange={handleFiles}
                  isDisabled={process !== 100}
                />
              </Wrapper>
            </UploadFile.Root>
          )}

        {multiDialog.some((dialog) => dialog.id === modalPreviewId && dialog.isOpen) && (
          <Modal
            id={modalPreviewId}
            isOpen={multiDialog.some((dialog) => dialog.id === modalPreviewId && dialog.isOpen)}
            onClose={() => closeDialog(modalPreviewId)}
            width="large"
            customClassName="round"
          >
            <UploadFile.Preview
              title={`Pré-visualização dos arquivos (${files.length})`}
              files={files}
              onRemove={(file) =>
                setFiles((prev) => prev.filter((f) => f.name !== file.name))
              }
            />
          </Modal>
        )}

        {multiDialog.some((dialog) => dialog.id === modalCameraId && dialog.isOpen) && (
          <Modal
            id={modalCameraId}
            isOpen={multiDialog.some((dialog) => dialog.id === modalCameraId && dialog.isOpen)}
            onClose={() => closeDialog(modalCameraId)}
            width='large'
          >
            <Camera
              buttonRetakePhotoText='Capturar novamente'
              buttonTakePhotoText='Capturar foto'
              mirrorText='Espelhar'
              onCapture={(imageSrc) => {
                // Convert base64 to File object
                const byteString = atob(imageSrc.split(',')[1]);
                const mimeString = imageSrc.split(',')[0].split(':')[1].split(';')[0];
                const ab = new ArrayBuffer(byteString.length);
                const ia = new Uint8Array(ab);
                for (let i = 0; i < byteString.length; i++) {
                  ia[i] = byteString.charCodeAt(i);
                }
                const blob = new Blob([ab], { type: mimeString });
                const file = new File([blob], `photo_${Date.now()}.jpg`, { type: mimeString });

                setFiles((prev) => [...prev, file]);
                closeDialog(modalCameraId);
              }}
            />
          </Modal>
        )}
        </UploadFile.Root>
      </Wrapper>
    </>
	)


}

const meta: Meta<typeof UploadFile> = {
  title: "Components/UploadFile/MountedPreview",
  component: UploadFileMounted,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UploadFileMounted>;

export const Default: Story = {
  args: {},
};
