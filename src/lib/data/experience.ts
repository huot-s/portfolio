import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'ds-shift',
		company: 'Shift Technology',
		description: 'Senior Data and Software Engineer (0)',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Paris',
		period: { from: new Date(), to: new Date() },
		skills: getSkills('csharp', 'sql', 'teamcity', 'python'),
		name: 'Senior Data and Software Engineer (1)',
		color: 'purple',
		links: ['https://www.shift-technology.com'],
		logo: Assets.Unknown,
		shortDescription: 'description'
	},
];

export const title = 'Experience';
