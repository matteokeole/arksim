import {setDifficultyOffset, Entity, Species} from "../src/index.js";

setDifficultyOffset(5.0);

const argentavis = new Entity(new Species.Argentavis(), {});