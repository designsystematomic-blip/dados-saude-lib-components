import { useEffect, useState } from "react";
import { PreviewProps } from "./Preview.types";
import styles from "./Preview.module.css";
import { Button, Checkbox, Text } from "@lib/main";
import FileItem from "../FileItem";

export default function Preview({ 
	title, 
	files, 
	onRemove 
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
	}, [files]);

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
				{title && <h3>{title}</h3>}
				{selectedFiles.length > 0 && (
					<Button
						type="button"
						onClick={handleRemoveSelected}
						label={`Remover Selecionados (${selectedFiles.length})`}
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
								fontFamily="secondary"
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
								color="var(--color-quartenary)"
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