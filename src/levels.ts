// _....... Nothing
// X....... Wall => O
// Blank... Floor
// @....... Player => R
// Dot..... Target
// b....... Box not on target
// B....... Box on target

const levels = [
	["XXXXX", "X@  X", "X b X", "X  .X", "XXXXX"],
	[
		"XXXXX__",
		"X   X__",
		"X@XbXXX",
		"X b ..X",
		"XXXXXXX"
	],
	["XXXXXXX", "X.   .X", "X  b  X", "X b@b X", "X  b  X", "X.   .X", "XXXXXXX"],
	["XXXXXXX", "X.   .X", "X.bbb.X", "XXb@bXX", "X.bbb.X", "X.   .X", "XXXXXXX"],
	[
		"__XXXXX_",
		"XXX   X_",
		"X.@b  X_",
		"XXX b.X_",
		"X.XXb X_",
		"X X . XX",
		"Xb Bbb.X",
		"X   .  X",
		"XXXXXXXX",
	],
	[
		"____XXXXX_____________",
		"____X   X_____________",
		"____Xb  X_____________",
		"__XXX  bXXX___________",
		"__X  b  b X___________",
		"XXX X XXX X     XXXXXX",
		"X   X XXX XXXXXXX  ..X",
		"X b  b             ..X",
		"XXXXX XXXX X@XXXX  ..X",
		"____X      XXX__XXXXXX",
		"____XXXXXXXX__________",
	],
];

export function getNumberOfLevels() {
	return levels.length;
}

export function getLevel(levelNumber: number): string[] {
	return [...levels[levelNumber]];
}
