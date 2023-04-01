import {Entity, Species, setDifficultyOffset} from "src";

setDifficultyOffset(5);

const terrorBird = new Entity(new Species.TerrorBird(), {
	// level: 150,
	// gender: 0,
});