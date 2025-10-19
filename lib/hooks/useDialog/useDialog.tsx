import { useState } from "react";

function useDialog() {

	const [open, setOpen] = useState<boolean>(false);

	const toggle = () => setOpen(prev => !prev);

	return {
		open,
		toggle
	};

}

export default useDialog;