import {setDifficultyOffset, Entity, Species} from "../src/index.js";

setDifficultyOffset(5);

console.log("");

const argentavis = new Entity(new Species.Argentavis(), {
	// level: 150,
	// gender: 0,
});