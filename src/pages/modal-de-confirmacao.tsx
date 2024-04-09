/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import { useState } from 'react';
import Head from 'next/head';

import styles from '@/styles/modal.module.css';
import ConfirmationModal from '@/components/ConfirmationModal';


export default function Home() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalTitle, setModalTitle] = useState('Confirmação');
	const [modalContent, setModalContent] = useState('Este é o conteúdo do modal.');

	const handleConfirm = () => {
		console.log('Ação confirmada');
		handleModalState();
	};

	const handleModalState = () => {
		setModalIsOpen(!modalIsOpen);
	}

	return (
		<>
			<Head>
				<title>Modal de Confirmação</title>
			</Head>
			<main className={styles.container}>
				<button type="button" onClick={() => setModalIsOpen(true)}>
					Abrir modal de confirmação
				</button>
			</main>
			<ConfirmationModal
				isOpen={modalIsOpen}
				onClose={handleModalState}
				onConfirm={handleConfirm}
				title={modalTitle}
				content={modalContent}
			/>
		</>
	);
}
