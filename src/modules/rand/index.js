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
	/**
	 * Picks a random number and returns the index of the weight interval that contains the number.
	 * The weights are provided as an array of numbers. The sum of the weights doesn't need to be 1.
	 * 
	 * @param	{array}	weights
	 * @returns	{number}
	 */
	getWeighted(weights) {
		// Get the weight min and max
		let min = 0;
		const max = weights.reduce((a, b) => a + b);

		// Pick a random number between 0 and the weight sum
		const n = this.getArbitrary(0, max);

		let normalized;

		for (const weight of weights) {
			// Remove the minimum from the result
			normalized = n - min;

			if (normalized <= weight) return weights.indexOf(weight);

			// Get the minimum for the next weighted value
			min += weight;
		}

		throw new Error("The result was not found in any weight interval.");
	},
};