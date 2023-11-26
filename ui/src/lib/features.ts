export interface IFeatures {
	home: IFeatureFlag
	about: IFeatureFlag
	music: IFeatureFlag
	photosAndVideos: IFeatureFlag
	events: IFeatureFlag
}

export interface IFeatureFlag {
	enabled: boolean
	hidden?: boolean
}

export const FEATURES: IFeatures = {
	home: {
		enabled: true
	},
	about: {
		enabled: true
	},
	music: {
		enabled: true
	},
	photosAndVideos: {
		enabled: true,
		hidden: true
	},
	events: {
		enabled: false
	}
}
