export default {
	/**
	 * Returns a random number between min (inclusive) and max (exclusive).
	 * 
	 * @param	{number}	min
	 * @param	{number}	max
	 * @returns	{number}
	 */
	getArbitrary: (min, max) => Math.random() * (max - min) + min,
	/**
	 * Returns a random number between min (inclusive) and max (inclusive).
	 * 
	 * @param	{number}	min
	 * @param	{number}	max
	 * @returns	{number}
	 */
	getInteger(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);

		return Math.floor(Math.random() * (max - min + 1)) + min;
	},
};