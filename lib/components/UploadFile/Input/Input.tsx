import { useCallback, useMemo, useState } from "react";
import { InputProps } from "./Input.types";
import style from "./Input.module.css";
import toCapitalizeCase from "@lib/utils";
import useBaseComponent from "@lib/hooks/useBaseComponent";

const Input = ({ 
	label, 
	icon, 
	name,
	id,
	accept,
	acceptDescription,
	multiple = true,
	fontFamily,
	textSize,
	textAlign,
	buttonColor,
	acceptDescriptionColor,
	isDisabled = false,
	onChange,
	showFilesList,
	filesList
}: InputProps) => {

	const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e);
	}, [onChange]);


	const { extraClasses } = useBaseComponent({
    fontFamily,
    textSize,
		textAlign
  });


	return (
		<div className={style.inputContainer}>
			<label 
				htmlFor={id}
				className={`${style.inputLabel} ${extraClasses}`}
				style={{ color: buttonColor }}
				aria-disabled={isDisabled}
			>
				{icon && <span className={style.inputIcon}>{icon}</span>}
				<span>{label}</span>
			</label>
			<input
				type="file"
				className={style.inputFile}
				name={name}
				id={id}
				accept={accept}
				multiple={multiple}
				onChange={handleChange}
				disabled={isDisabled}
				hidden
			/>
			{acceptDescription && (
				<p className={`${style.inputLabel} ${extraClasses}`} style={{ color: acceptDescriptionColor }}>{acceptDescription}</p>
			)}
			{showFilesList && (
				filesList && filesList.length > 0 && (
					<div>
						<p className={`${style.inputLabel} ${extraClasses}`} style={{ color: acceptDescriptionColor }}>
							{filesList.length} arquivo{filesList.length > 1 ? 's' : ''} selecionado{filesList.length > 1 ? 's' : ''},
						</p>
						<div>
						<ul className={`${style.filesList} ${extraClasses}`} style={{ color: acceptDescriptionColor }}>
							{Array.from(filesList).map((file) => (
								<li key={file.name}>{file.name}</li>
							))}
						</ul>
						</div>
					</div>
				)
			)}
		</div>
	)
}

export default Input;