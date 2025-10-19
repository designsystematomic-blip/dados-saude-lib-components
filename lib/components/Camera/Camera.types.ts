export type CameraProps = {
	onCapture: (dataUrl: string) => void;
	buttonTakePhotoText: string;
	buttonRetakePhotoText: string;
	mirrorText?: string;
	buttonFacingModeText?: string;
	buttonFacingModeEnvironmentText?: string;
};