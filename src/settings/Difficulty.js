export let DifficultyOffset = 1.0;

export let LevelRange = 30;

export function setDifficultyOffset(value) {
    DifficultyOffset = value;

    console.log(`%cDifficultyOffset set to ${value}`, "color: gray; font-style: italic");
};