/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */

import styles from '@/styles/context-api.module.css';
import { IToastMessage } from '@/types/toast-message';
import { ToastMessage } from '@/components/ToastMessage';
import { useToast } from '@/contexts/ToastContext';
import { useState } from 'react';

export default function ContextApi() {

	const [toastMessages, setToastMessages] = useState<Array<IToastMessage>>([]);


	const messages: Array<IToastMessage> = [
		{
			id: '1',
			message: 'Mensagem de sucesso',
			type: 'success',
		},
		{
			id: '2',
			message: 'Mensagem de erro',
			type: 'error',
		},
	];

	const { addToast } = useToast();

	const handleSuccessButtonClick = () => {
		const newMessage: IToastMessage = {
			id: Math.random().toString(),
			message: messages[0].message,
			type: messages[0].type,
		};
		setToastMessages((prevMessages) => [...prevMessages, newMessage]);
		addToast(newMessage);
	};

	const handleErrorButtonClick = () => {
		const newMessage: IToastMessage = {
			id: Math.random().toString(),
			message: messages[1].message,
			type: messages[1].type,
		};
		setToastMessages((prevMessages) => [...prevMessages, newMessage]);
		addToast(newMessage);
	};

	return (
		<>
			<div className={styles.container}>
				<button type="button" onClick={handleSuccessButtonClick}>
					Disparar mensagem de sucesso
				</button>
				<button type="button" onClick={handleErrorButtonClick}>
					Disparar mensagem de erro
				</button>
			</div>

			<div className={styles['toast-container']}>
				{toastMessages.map((message) => (
					<ToastMessage key={message.id} content={message} />
				))}
			</div>
		</>
	);
};
