import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Wrapper from "../Wrapper";
import styles from './Camera.module.css';
import type { CameraProps } from './Camera.types';

function Camera({
  buttonTakePhotoText = "Take Photo",
  buttonRetakePhotoText = "Retake Photo",
  mirrorText = "Mirror",
  buttonFacingModeText = "Mudar para camera frontal",
  buttonFacingModeEnvironmentText = "Mudar para camera traseira",
  onCapture
}: CameraProps) {

  const [facingMode, setFacingMode] = useState<"user" | "environment">("user"); // Initial facing mode
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const webcamRef = useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = useState<string | null | undefined>(null);
  const [mirrored, setMirrored] = useState<boolean>(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef?.current?.getScreenshot();
    setImgSrc(imageSrc);
    if (imageSrc) {
      onCapture(imageSrc);
    }
  }, [webcamRef, onCapture]);

  const toggleFacingMode = useCallback(() => {
    setFacingMode((prevFacingMode) =>
      prevFacingMode === "user" ? "environment" : "user"
    );
  }, []);

  const handleUserMedia = () => {
    setLoading(true);
    setError(null); // Clear any previous errors
    console.log('Camera successfully loaded!');
  };

  const handleUserMediaError = (error: any) => {
    setLoading(false);
    setError(error);
    console.error('Error accessing camera:', error);
  };

  const retake = () => {
    setImgSrc(null);
  };

  const videoConstraints = {
    facingMode: facingMode,
  };

  return (
    <div className={styles.container}>
      {!loading && !error && (
        <Wrapper
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '400px',
            backgroundColor: '#f4f4f4ff'
          }}
        />
      )}
      {error && <p className={styles.error}>Error ao tentar carregar a camera: {error.message}</p>}
      {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam
          height={'100%'}
          width={'100%'}
          ref={webcamRef}
          mirrored={mirrored}
          videoConstraints={videoConstraints}
          screenshotFormat="image/jpeg"
          onUserMedia={handleUserMedia}
          onUserMediaError={handleUserMediaError}
        />
      )}
      <div className={styles.controls}>
        <Checkbox
          label={mirrorText}
          ariaLabel={mirrorText}
          id={`mirror-checkbox-${Math.random()}`}
          checked={mirrored}
          onChange={(set) => setMirrored(set)}
        />
        <div className={styles.btnContainer}>
          {imgSrc ? (
            <Button type="button" onClick={retake} label={buttonRetakePhotoText} ariaLabel={buttonRetakePhotoText} />
          ) : (
            <Button type="button" onClick={capture} label={buttonTakePhotoText} ariaLabel={buttonTakePhotoText} />
          )}
          <Button
            type="button"
            variant="secondary"
            onClick={toggleFacingMode}
            label={facingMode === "user" ? buttonFacingModeEnvironmentText : buttonFacingModeText}
            ariaLabel={facingMode === "user" ? buttonFacingModeEnvironmentText : buttonFacingModeText}
          />
        </div>
      </div>

    </div>
  );
}

export default Camera;