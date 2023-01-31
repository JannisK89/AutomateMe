export const randomNumber = (max: number) => Math.floor(Math.random() * max);

export const fisherYatesShuffle = (valueArr: string[]) => {
	let randomValue: number;
	for (let i = valueArr.length - 1; i > 0; i--) {
		randomValue = randomNumber(i);
		[valueArr[i], valueArr[randomValue]] = [valueArr[randomValue], valueArr[i]];
	}
	return valueArr;
};
