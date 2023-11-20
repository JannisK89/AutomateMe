import { encryptKey } from '$lib/utils/crypt';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const key = await request.text();
	const cryptKey = {
		key: encryptKey(key)
	};
	return json(cryptKey);
};
