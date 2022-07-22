import {generator} from "../index.js";

/**
 * Appends a generated UUID to an object.
 * 
 * @constructor
 */
export function UUID() {
	this.uuid = uuid.next().value;
}

const uuid = generator();