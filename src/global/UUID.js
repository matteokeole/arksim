import {UUIDGenerator} from "../index.js";

/**
 * Appends a generated UUID to an object.
 * 
 * @constructor
 */
export function UUID() {
	this.uuid = generator.next().value;
}

const generator = UUIDGenerator();