import {setDifficultyOffset, Entity, Species} from "../src/index.js";

setDifficultyOffset(5);

console.log("");

const terrorBird = new Entity(new Species.TerrorBird(), {
	// level: 150,
	// gender: 0,
});