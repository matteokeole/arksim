import {UUIDGenerator} from "../index.js";

/** @type {UUIDGenerator} */
const generator = UUIDGenerator();

export function UUID() {
	this.uuid = generator.next().value;
}