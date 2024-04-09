import React, { useEffect, useState } from 'react';
import { useToast } from '@/contexts/ToastContext';
import styles from './style.module.css';
import { IToastMessage } from '@/types/toast-message';

type ToastMessageProps = {
	content: IToastMessage;
};

export const ToastMessage: React.FC<ToastMessageProps> = ({ content }) => {
	const { removeToast } = useToast();
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false);
			setTimeout(() => {
				removeToast(content.id);
			}, 500);
		}, 3000);

		return () => clearTimeout(timer);
	}, [content.id, removeToast]);

	const handleClose = () => {
		setVisible(false);
		setTimeout(() => {
			removeToast(content.id);
		}, 500);
	};

	return visible ? (
		<div className={styles.container} data-toast-type={content.type} data-toast-id={content.id}>
			<span data-content>{content.message}</span>
			<button data-close onClick={handleClose}>╳</button>
		</div>
	) : null;
};
