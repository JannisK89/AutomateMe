import sha256 from 'crypto-js/sha256';

export const encryptKey = (key: string): string => {
	return sha256(key).toString();
};

export const compareKeys = (input: string, key: string): boolean => {
	const cryptKey = sha256(key).toString();

	return cryptKey === input;
};
