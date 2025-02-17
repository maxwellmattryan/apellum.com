import { MUSIC_DATA } from '@lib/data/music'
import type { IEpkData } from './epk-data.interface'
import { EpkBiographyType } from './epk-data.enum'

export const EPK_DATA: IEpkData = {
	downloadUrl: 'https://storage.googleapis.com/apellum-files/epks/apellum-epk.zip',
	biographyData: {
		image: 'press_epk-01.jpg',
		/**
		 * When updating the biography, make sure to make changes in the following places:
		 * - Bandcamp
		 * - Beatport
		 * - Google Drive (upload to GCP)
		 * - Kinetic Management
		 * - Resident Advisor
		 * - Spotify
		 * - Website (source of truth)
		 */
		biographies: {
			// [EpkBiographyType.OneLine]: {
			// 	type: EpkBiographyType.OneLine,
			// 	text: [
			// 		`
			// 		In the heart of Austin’s electronic music scene, Apellum crafts a sound that is immersive, hypnotic, and deeply attuned to the dancefloor. As a producer and DJ, Apellum channels an intricate interplay of rhythm and texture, creating music that traverses the cerebral and physical, inviting listeners to lose themselves in the groove.
			// 	`,
			// 	],
			// },
			[EpkBiographyType.Short]: {
				type: EpkBiographyType.Short,
				text: [
					`
					Rooted in Austin’s vibrant electronic music scene, Apellum is a producer and DJ crafting hypnotic and groove-driven soundscapes. Drawing from his background as a percussionist, sound designer, and audio engineer, he emphasizes intricate rhythms with evolving textures to create sonically immersive experiences. With multiple EPs and a VA compilation on the horizon, Apellum continues to push his artistic boundaries both in the studio and on the dancefloor.
				`,
				],
			},
			[EpkBiographyType.Long]: {
				type: EpkBiographyType.Long,
				text: [
					`
					Rooted in Austin’s vibrant electronic music scene, Apellum is a producer and DJ crafting hypnotic and groove-driven soundscapes. He channels an intricate interplay of rhythm and texture to create music that evokes a visceral and cerebral response in his listeners.
				`,
					`
					With a foundation in percussion, sound design, and audio engineering, Apellum’s studio work thrives on exploration. His forthcoming releases include multiple EPs and a contribution to a VA compilation, each offering an evolving glimpse into his creative vision.
				`,
				],
			},
		},
	},
	musicData: {
		image: 'press_epk-02.jpg',
		collections: MUSIC_DATA.collections,
	},
	pressData: {
		images: ['press_epk-03.jpg', 'press_epk-04.jpg', 'press_epk-05.jpg'],
	},
}
