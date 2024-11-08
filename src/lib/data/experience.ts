import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'ds-shift',
		company: 'Shift Technology',
		name: 'Senior Data and Software Engineer',
		contract: ContractType.FullTime,
		location: 'Paris',
		period: { from: new Date(2021, 12, 1) },

		type: 'Software Development',		
		skills: getSkills('csharp', 'sql', 'teamcity', 'python'),		
		color: 'purple',
		links: [{ to: 'https://www.shift-technology.com', label: 'Website', newTab: true}],
		logo: Assets.ShiftTechnology,
		shortDescription: 'description',
		description: 'full description (to fill)',
	},
	{
		slug: 'dev-klee',
		company: 'Klee Group',
		name: 'Software Engineer Consultant',
		contract: ContractType.FullTime,
		location: 'Le-Plessis-Robinson (92)',
		period: { from: new Date(2020, 10, 1), to: new Date(2021, 11, 30) },

		type: 'Software Development',		
		skills: getSkills('csharp', 'sql', 'teamcity', 'python'),		
		color: 'yellow',
		links: [{ to: 'https://www.kleegroup.com', label: 'Website', newTab: true}],
		logo: Assets.ShiftTechnology,
		shortDescription: 'description',
		description: 'full description (to fill)',
	},
];

export const title = 'Experience';
