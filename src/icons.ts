import p5 from "p5"

export enum IconType {
	Volume,
	Mute,
	Restart,
}

const iconNames = [
	"https://cddataexchange.blob.core.windows.net/data-exchange/sokoban/icons/volume.png",
	"https://cddataexchange.blob.core.windows.net/data-exchange/sokoban/icons/mute.png",
	"https://cddataexchange.blob.core.windows.net/data-exchange/sokoban/icons/update-arrow.png",
]

const images: p5.Image[] = []

export function preload(p: p5) {
	for (const iconName of iconNames) {
		images.push(p.loadImage(iconName))
	}
}

export function getIcon(type: IconType): p5.Image {
	return images[type]
}
