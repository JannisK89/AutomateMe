import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (() => {
	const random = [
		{
			name: 'Richard',
			age: 31
		},
		{
			name: 'Dinesh',
			age: 33
		},
		{
			name: 'Gilfoyle',
			age: 35
		},
		{
			name: 'Bighead',
			age: 29
		},
		{
			name: 'Jared',
			age: 31
		}
	];

	return json(random);
}) satisfies RequestHandler;
