import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'MSc Advanced Computing (with Distinction)',
		location: 'London',
		logo: Assets.ImperialCollege,
		organization: 'Imperial College London',
		period: { from: new Date(2019, 9 - 1, 30), to: new Date(2020, 8 - 1, 30) },
		slug: 'imperial',
		subjects: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Finance', 'Blockchain', 'Python'],
		description: '',
		name: '',
		shortDescription: '',
	},
	{
		degree: 'Master (Diplôme Ingénieur)',
		location: 'Gif-sur-Yvette (91)',
		logo: Assets.CentraleSupelec,
		organization: 'CentraleSupélec',
		period: { from: new Date(2016, 9 - 1, 1), to: new Date(2019, 8 - 1, 30) },
		slug: 'centralesupelec',
		subjects: ['Signal Processing', 'Mathematics', 'Statistics', 'Software engineering', 'Electronics', 'Physics',
			'Management', 'Accountability', 'Economics', 'Corporate law', 'Project management'
		],
		description: '',
		name: '',
		shortDescription: '',
	},
	{
		degree: 'CPGE (MP*)',
		location: 'Versailles (78)',
		logo: Assets.LyceeHoche,
		organization: 'Lycée Hoche',
		period: { from: new Date(2014, 9 - 1, 1), to: new Date(2016, 8 - 1, 30) },
		slug: 'hoche',
		subjects: ['Mathematics', 'Physics', 'Computer Science'],
		description: '',
		name: '',
		shortDescription: '',
	}
];

export const title = 'Education';
