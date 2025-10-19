import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import Button from "../Button";
import Checkbox from "../Checkbox";
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

  const [facingMode, setFacingMode] = useState("user"); // Initial facing mode
  const webcamRef = useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = useState<string | null | undefined>(null);
  const [mirrored, setMirrored] = useState(false);

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

  const videoConstraints = {
    facingMode: facingMode,
  };

  const retake = () => {
    setImgSrc(null);
  };

  return (
    <div className={styles.container}>
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