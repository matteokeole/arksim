import {Preset} from "../index.js";

export function TerrorBird() {
	this.name = "Terror Bird";

	this.levelWeights = Preset.LevelWeights.Default;

	this.stats = {
		health: 270,
		stamina: 160,
		oxygen: 150,
		food: 1500,
		weight: 120,
		damage: 18,
		torpidity: 300,
	};
	this.adds = {
		health: 54,
		stamina: 16,
		oxygen: 15,
		food: 150,
		weight: 2.4,
		damage: 0.9,
	};
	this.torpidityAdd = 18;

	this.points = {
		health: 0,
		stamina: 0,
		oxygen: 0,
		food: 0,
		weight: 0,
		damage: 0,
	};
};