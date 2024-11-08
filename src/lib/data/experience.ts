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
		period: { from: new Date(2021, 12 - 1, 1) },
		type: 'Software and Data Engineering',		
		skills: getSkills('csharp', 'sql', 'teamcity', 'python', 'git', 'github', 'octopus', 'rider'),		
		color: '#ffffff00',
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
		period: { from: new Date(2020, 9 - 1, 1), to: new Date(2021, 11 - 1, 30) },
		type: 'Software Development',		
		skills: getSkills('java', 'oracle', 'jenkins', 'tortoise-svn', 'mantis-bt', 'sonarqube', 'eclipse'),		
		color: '#ffffff00',
		links: [{ to: 'https://www.kleegroup.com', label: 'Website', newTab: true}],
		logo: Assets.KleeGroup,
		shortDescription: 'description',
		description: 'full description (to fill)',
	},
	{
		slug: 'consultant-tnp',
		company: 'TNP Consultants',
		name: 'Junior Data Scientist Consultant',
		contract: ContractType.FullTime,
		location: 'Luxembourg',
		period: { from: new Date(2019, 3 - 1, 1), to: new Date(2019, 8 - 1, 30) },
		type: 'Data Science, Consulting',		
		skills: getSkills('python', 'aws'),		
		color: '#ffffff00',
		links: [{ to: 'https://www.tnpconsultants.com', label: 'Website', newTab: true}],
		logo: Assets.TnpConsultants,
		shortDescription: 'description',
		description: 'full description (to fill)',
	},
	{
		slug: 'sec-natixis',
		company: 'Natixis',
		name: 'Cybersecurity Architect and Expert',
		contract: ContractType.FullTime,
		location: 'Paris',
		period: { from: new Date(2018, 9 - 1, 1), to: new Date(2019, 2 - 1, 28) },
		type: 'Cybersecurity',		
		skills: getSkills(),		
		color: '#ffffff00',
		links: [{ to: 'https://natixis.groupebpce.com', label: 'Website', newTab: true}],
		logo: Assets.Natixis,
		shortDescription: 'description',
		description: 'full description (to fill)',
	},
	{
		slug: 'intern-airbus',
		company: 'Airbus Defence & Space',
		name: 'Software Engineer Intern',
		contract: ContractType.FullTime,
		location: 'Elancourt (78)',
		period: { from: new Date(2017, 6 - 1, 1), to: new Date(2017, 7 - 1, 30) },
		type: 'Software Development',		
		skills: getSkills(),		
		color: '#ffffff00',
		links: [{ to: 'https://www.airbus.com', label: 'Website', newTab: true}],
		logo: Assets.Airbus,
		shortDescription: 'description',
		description: 'full description (to fill)',
	},
];

export const title = 'Experience';
