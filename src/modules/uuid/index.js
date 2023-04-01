/**
 * Generates a random UUID using the Crypto API.
 * 
 * @yields {String}
 */
export function* UUIDGenerator() {
	while (true) yield crypto.randomUUID();
};