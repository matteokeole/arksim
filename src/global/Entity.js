import {DifficultyOffset, LevelRange} from "../settings/Difficulty.js";
import Rand from "../modules/rand/index.js";
import {BaseLevelWeights} from "./Presets.js";

/**
 * Generates an entity.
 * 
 * A species must be provided.
 * A list of optional settings can be given as well.
 * 
 * @constructor
 * @param	{Creature}		species
 * @param	{object}		settings
 * @param	{number}		settings.level
 * @returns	{Entity}
 */
export function Entity(
	species,
	{
		level = null,
	} = {},
) {
	if (!species) throw new Error("Tried to instantiate a new Entity without an associated species.");

	this.species = species;

	if (level === null) {
		level = Rand.getWeightedLevel(BaseLevelWeights);
		console.log(level);

		/*let level = Rand.getInteger(1, LevelRange);

		level *= DifficultyOffset;

		console.log(level)*/ 
	}

	this.level = level;
};