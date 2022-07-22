import {Preset} from "../index.js";

export function Argentavis() {
	this.name = "Argentavis";

	this.levelWeights = Preset.LevelWeights.Default;

	this.stats = {
		health: 365,
		stamina: 400,
		oxygen: 150,
		food: 2000,
		weight: 400,
		damage: 25,
		torpidity: 600,
	};
	this.adds = {
		health: 73,
		stamina: 20,
		oxygen: 15,
		food: 200,
		weight: 8,
		damage: 1.25,
	};
	this.torpidityAdd = 36;

	this.points = {
		health: 0,
		stamina: 0,
		oxygen: 0,
		food: 0,
		weight: 0,
		damage: 0,
	};
};