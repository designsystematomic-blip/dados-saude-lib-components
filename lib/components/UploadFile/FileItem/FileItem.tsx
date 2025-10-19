import { FileProps } from "./FileItem.types";
import styles from "./FileItem.module.css";
import { memo } from "react";

function FileItem({ file, urlObject }: FileProps) {

	const fileType = file.type;
	const fileUrl = urlObject;

	return (
		<div className={styles.fileItem}>
			{fileType.startsWith('image/') && fileUrl ? (
				<Image 
					url={fileUrl}
					name={file.name}
				/>
			) : (
				<Iframe url={fileUrl} />
			)}
		</div>
	)
}

const Image = (image: { url: string; name: string }) => {
	return (
		<div>
			<img
				src={image.url}
				alt={image.name}
				className={styles.previewFile}
				onError={(e) => {
					console.error('Erro ao carregar imagem:', image.name);
					e.currentTarget.style.display = 'none';

				}}
			/>
		</div>
	);
};

const Iframe = (iframe: { url: string }) => {
	return (
		<div>
			<iframe src={iframe.url} className={styles.previewFile} />
		</div>
	);
};

export default memo(FileItem);