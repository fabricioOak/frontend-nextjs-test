/**
 * Formulário
 *
 * - Primeiramente vá até /src/pages/api/users/create.ts e implemente a API
 * - Deve ser implementado utilizando a lib react-hook-form
 * - O formulário deve ter os seguintes campos: nome, e-mail
 * - Os dois campos são obrigatórios e precisam de validação
 * - Ao dar 'submit', deve ser feito uma request para /api/users/create
 * - Lide com os possíveis erros
 */

import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '@/styles/formulario.module.css';

interface FormValues {
	name: string;
	email: string;
}

export default function Form() {
	const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();

	const onSubmit = async (data: FormValues) => {
		try {
			const response = await fetch('/api/users/create', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error('Erro ao criar o usuário');
			}

			const result = await response.json();
			console.log('Usuário criado:', result);
			reset();
		} catch (error) {
			console.error('Erro ao submeter o formulário:', error);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input {...register('name', { required: 'Nome é obrigatório' })} placeholder="Nome" />
					{errors.name && <p>{errors.name.message}</p>}

					<input {...register('email', { required: 'E-mail é obrigatório', pattern: { value: /^\S+@\S+$/i, message: 'E-mail inválido' } })} placeholder="E-mail" />
					{errors.email && <p>{errors.email.message}</p>}

					<button type="submit" data-type='confirm'>Enviar</button>
				</form>
			</div>
		</div>
	);
}
