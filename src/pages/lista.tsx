/**
 * Lista
 *
 * - Primeiramente vá até /src/pages/api/users/index.ts e implemente a API
 * - Obter a lista de usuários da API
 * - Renderizar a lista de usuários
 */

import { useEffect, useState } from 'react';

import styles from '@/styles/lista.module.css';
import { IUser } from '@/types/user';

export default function Lista() {
	const [users, setUsers] = useState<Array<IUser>>([]);
	const [isLoading, setIsLoading] = useState(false);

	async function getUsersList() {

		try {
			setIsLoading(true);
			const response = await fetch('/api/users');
			const data = await response.json();

			if (!response.ok) throw new Error('Erro ao obter os dados');

			setUsers(data);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		getUsersList();
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2>Lista de usuários</h2>
				<div data-list-container>
					{!isLoading ? users.map((user) => (
						<div data-list-item key={user.id}>
							ID {user.id} - Usuário {user.name} ({user.email})
						</div>
					)) : (
						<p>Carregando...</p>
					)}
				</div>
			</div>
		</div>
	);
}
