import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'MSc Advanced Computing (with Distinction)',
		description: 'test2',
		location: 'London',
		logo: Assets.ImperialCollege,
		name: 'test',
		organization: 'Imperial College London',
		period: { from: new Date(2019, 9, 30), to: new Date(2020, 8, 30) },
		shortDescription: '',
		slug: 'imperial',
		subjects: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Finance', 'Blockchain', 'Python']
	},
	{
		degree: 'Master (Diplôme Ingénieur)',
		description: '',
		location: 'Gif-sur-Yvette (91)',
		logo: Assets.CentraleSupelec,
		name: '',
		organization: 'CentraleSupélec',
		period: { from: new Date(2016, 9, 1), to: new Date(2019, 8, 30) },
		shortDescription: '',
		slug: 'centralesupelec',
		subjects: ['Signal Processing', 'Mathematics', 'Statistics', 'Software engineering', 'Electronics', 'Physics',
			'Management', 'Accountability', 'Economics', 'Corporate law', 'Project management'
		]
	}
];

export const title = 'Education';
