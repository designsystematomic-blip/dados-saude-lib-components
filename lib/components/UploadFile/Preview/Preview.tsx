import { Button, Checkbox, Text, Title } from "@lib/main";
import { useEffect, useState } from "react";
import FileItem from "../FileItem";
import styles from "./Preview.module.css";
import { PreviewProps } from "./Preview.types";

export default function Preview({ 
	title, 
	files, 
	onRemove,
	fontFamily,
	textSize
}: PreviewProps) {

	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const [fileUrls, setFileUrls] = useState<Map<string, string>>(new Map());

	useEffect(() => {
		if (!files || files.length === 0) {
			fileUrls.forEach(url => URL.revokeObjectURL(url));
			setFileUrls(new Map());
			return;
		}

		const newUrls = new Map<string, string>();
		files.forEach(file => {
			newUrls.set(file.name, URL.createObjectURL(file));
		});
		
		setFileUrls(newUrls);

		return () => {
			newUrls.forEach(url => URL.revokeObjectURL(url));
		};
	}, [fileUrls, files]);

	const handleFileSelection = (file: File, isSelected: boolean) => {
		if (isSelected) {
			setSelectedFiles(prev => [...prev, file]);
		} else {
			setSelectedFiles(prev => prev.filter(f => f.name !== file.name));
		}
	};

	const handleRemoveSelected = () => {
		selectedFiles.forEach(file => onRemove(file));
		setSelectedFiles([]);
	};

	if (!files || files.length === 0) {
		return (
			<div className={styles.emptyState}>
				<p>Nenhum arquivo selecionado</p>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				{title && <Title tag="h3" content={title} fontFamily={fontFamily} textSize={textSize} />}
				{selectedFiles.length > 0 && (
					<Button
						type="button"
						onClick={handleRemoveSelected}
						label={`Remover Selecionados (${selectedFiles.length})`}
						fontFamily={fontFamily}
						textSize={textSize}
					/>
				)}
			</div>
			
			<div className={styles.fileGrid}>
				{files.map((file) => {
					const fileUrl = fileUrls.get(file.name);
					const isSelected = selectedFiles.some(f => f.name === file.name);

					if (!fileUrl) {
						return <div>
							<Text 
								content={`Não foi possível carregar a pré-visualização de ${file.name}`} 
								fontFamily={fontFamily}
								textSize={textSize}
							/>
						</div>;
					}

					return (
						<div key={file.name} className={`${styles.fileItemContainer} ${isSelected ? styles.selected : ''}`}>
							<Checkbox 
								id={file.name}
								ariaLabel={`Selecionar ${file.name}`}
								label={`Selecionar ${file.name}`}
								checked={isSelected}
								onChange={(checked) => handleFileSelection(file, checked)}
								disabled={false}
								customClassName={styles.checkbox}
								textColor="var(--color-quartenary)"
								fontFamily={fontFamily}
								textSize={textSize}
							/>
							
							<div className={styles.filePreview}>
								<FileItem 
									file={file}
									urlObject={fileUrl}
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}