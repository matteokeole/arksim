export const Rand = {
	/**
	 * Returns a random number between min (inclusive) and max (exclusive).
	 * 
	 * @param {Number} min
	 * @param {Number} max
	 * @returns {Number}
	 */
	getArbitrary: (min, max) => Math.random() * (max - min) + min,
	/**
	 * Returns a random number between min (inclusive) and max (inclusive).
	 * 
	 * @param {Number} min
	 * @param {Number} max
	 * @returns {Number}
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
	 * @param {Array} values
	 * @returns {Number}
	 */
	getWeightedLevel(values) {
		const weights = values.map(value => value.weight);

		// Get the weight min and max
		let min = 0;
		const max = weights.reduce((a, b) => a + b);

		// Pick a random number between 0 and the weight sum
		const n = Math.random() * max;

		let normalized, range, level;

		for (const weight of weights) {
			// Remove the minimum from the result
			normalized = n - min;

			if (normalized <= weight) {
				range = values[weights.indexOf(weight)].value;

				// Find the current level
				const maxCurrent = range.reduce((a, b) => a + b);
				// console.log(normalized, "is in [ 0,", weight, "]")
				// console.log("return range", range)
				// console.log("range count", range.length)
				let single = weight / range.length
				// console.log("single item width", single)
				let index = Math.ceil(normalized / single) - 1;
				level = range[index];
				// console.log("level", range[index])

				break;
			}

			// Get the minimum for the next weighted value
			min += weight;
		}

		return level;
	},
	/**
	 * Spreads randomly n into an object of point slots.
	 * Returns the updated object.
	 * 
	 * @param {Number} n
	 * @param {Object} slots
	 * @returns {Object}
	 */
	distribute(n, slots) {
		const keys = Object.keys(slots);

		for (let p = 0, length = keys.length; p < n; p++) {
			// console.log(`%cDistributing point n°${p + 1}`, "color: lightgray; font-style: italic");

			const slot = keys[Math.floor(Math.random() * length)];

			slots[slot]++;
		}

		return slots;
	},
};