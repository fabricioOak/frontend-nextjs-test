/**
 * @api {get} /api/users Read list
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que retorne uma lista de usuários
 * - A request deve receber apenas o método GET
 * - A lista deve conter pelo menos 2 usuários
 * - Cada usuário deve ter um id, nome e email
 * - Utilize a interface IUser para tipar os dados
 */

import { NextApiRequest, NextApiResponse } from 'next/types';

import { IUser } from '@/types/user.d';
import { faker } from "@faker-js/faker";

const generateUsers = (amount: number): Array<IUser> => {
	const users: Array<IUser> = [];

	for (let i = 0; i < amount; i++) {
		const id = i + 1;
		const name = faker.person.fullName();
		const email = faker.internet.email();

		users.push({ id, name, email });
	}

	return users;

}

export default (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== 'GET') return res.status(405).json({ message: 'Método não permitido' });

	const users = generateUsers(5);
	return res.status(200).json(users);

};
