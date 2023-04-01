import {DifficultyOffset, Rand, UUID, Output} from "../index.js";

/**
 * Generates a new entity.
 * 
 * @param {Species} species
 * @param {Object} [options]
 * @param {Number} [options.level]
 * @param {Number} [options.genre]
 * @returns {Entity}
 */
export function Entity(species, {
	level,
	gender,
} = {}) {
	if (!species) throw new Error(Output.EntityWithoutSpecies);

	UUID.call(this);

	level ??= Rand.getWeightedLevel(species.levelWeights) * DifficultyOffset;
	gender ??= Math.round(Math.random());

	const points = Rand.distribute(level - 1, species.points);

	const stats = structuredClone(species.stats);
	stats.health	+= species.adds.health	* points.health;
	stats.stamina	+= species.adds.stamina	* points.stamina;
	stats.oxygen	+= species.adds.oxygen	* points.oxygen;
	stats.food		+= species.adds.food	* points.food;
	stats.weight	+= species.adds.weight	* points.weight;
	stats.damage	+= species.adds.damage	* points.damage;
	stats.torpidity	+= species.torpidityAdd	* (level - 1);

	console.log(`%cWild ${gender ? "Female" : "Male"} ${species.name} - Lvl ${level}`, "color: gold; text-decoration: underline");
	console.log(`%cEntity ID: ${this.uuid}`, "color: gray; font-style: italic");
	console.log("Species Base Statistics:");
	console.table(species.stats);
	console.log("Species Adds Per Level:");
	console.table(species.adds);
	console.log("Entity Points:");
	console.table(points);
	console.log("Entity Statistics:");
	console.table(stats);

	this.species = species;
	this.level = level;
	this.gender = gender;
	this.points = points;
	this.stats = stats;
};