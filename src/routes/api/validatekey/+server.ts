import { compareKeys } from '$lib/utils/crypt';
import { json as jsn } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

type reqBody = {
	input: string;
	key: string;
};

export const POST: RequestHandler = async ({ request }) => {
	const json: reqBody = await request.json();
	try {
		const input = json.input;
		const key = json.key;
		const result = {
			result: compareKeys(input, key)
		};

		return jsn(result, { status: 200 });
	} catch {
		console.error(`Bad payload ${json}`);
		return jsn('Internal Server Error', { status: 500 });
	}
};
