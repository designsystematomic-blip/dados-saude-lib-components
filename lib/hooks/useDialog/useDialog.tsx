import { useState } from "react";

type Dialog = {
	id: string,
	isOpen: boolean,
}

function useDialog() {

	const [multiDialog, setMultiDialog] = useState<Dialog[]>([
		{
			id: '',
			isOpen: false,
		}
	]);

	//Handle openDialog
	//rules: if one dialog as drawer or modal is open, close it and open the item that call the function using the id element

	const openDialog = (id: string) => {
		setMultiDialog((prev) => {
			//Close all dialogs
			const newDialogs = prev.map((dialog) => ({
				...dialog,
				isOpen: false,
			}));

			//Check if dialog with id exists
			const dialogIndex = newDialogs.findIndex((dialog) => dialog.id === id);

			if (dialogIndex !== -1) {
				//Open the dialog with the id
				newDialogs[dialogIndex].isOpen = true;
				return newDialogs;
			} else {
				//If not exists, add it to the array and open it
				return [
					...newDialogs,
					{
						id,
						isOpen: true,
					}
				];
			}
		});
	}

	const closeDialog = (id: string) => {
		setMultiDialog((prev) => {
			return prev.map((dialog) => {
				if (dialog.id === id) {
					return {
						...dialog,
						isOpen: false,
					}
				}
				return dialog;
			});
		});
	}

	return {
		multiDialog,
		openDialog,
		closeDialog,
	};

}

export default useDialog;