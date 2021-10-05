import p5 from "p5"

export enum BlockType {
	Wall,
	Floor,
	Target,
	Box,
	BoxOnTarget,
}

const imageNames = [
	"https://cddataexchange.blob.core.windows.net/data-exchange/sokoban/Blocks/block_06.png",
	"https://cddataexchange.blob.core.windows.net/data-exchange/sokoban/Ground/ground_01.png",
	"https://cddataexchange.blob.core.windows.net/data-exchange/sokoban/Ground/ground_04.png",
	"https://cddataexchange.blob.core.windows.net/data-exchange/sokoban/Crates/crate_43.png",
	"https://cddataexchange.blob.core.windows.net/data-exchange/sokoban/Crates/crate_08.png",
]

const images: p5.Image[] = []

export function preload(p: p5) {
	for (const imageName of imageNames) {
		images.push(p.loadImage(imageName))
	}
}

export function GetBlockImage(type: BlockType): p5.Image {
	return images[type]
}

export function GetBlockImageBySymbol(type: string): p5.Image {
	switch (type) {
		case "X":
			return GetBlockImage(BlockType.Wall)
		case " ":
			return GetBlockImage(BlockType.Floor)
		case "@":
			return GetBlockImage(BlockType.Floor)
		case ".":
			return GetBlockImage(BlockType.Target)
		case "b":
			return GetBlockImage(BlockType.Box)
		case "B":
			return GetBlockImage(BlockType.BoxOnTarget)
	}
}
