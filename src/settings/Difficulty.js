/** @type {Number} */
export let DifficultyOffset = 1.0;

/** @type {Number} */
export let LevelRange = 30;

/** @param {Number} value */
export function setDifficultyOffset(value) {
    DifficultyOffset = value;

    console.log(`%cDifficultyOffset set to ${value}`, "color: gray; font-style: italic");
};