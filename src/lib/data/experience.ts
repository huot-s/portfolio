import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

import shift from '../md/experiences/shift.md?raw';
import klee from '../md/experiences/klee.md?raw';
import tnp from '../md/experiences/tnp.md?raw';
import natixis from '../md/experiences/natixis.md?raw';
import airbus from '../md/experiences/airbus.md?raw';

export const items: Array<Experience> = [
	{
		slug: 'lead-pearltrees',
		company: 'Pearltrees',
		name: 'Lead IA Engineer',
		contract: ContractType.FullTime,
		location: 'Paris',
		period: { from: new Date(2025, 4 - 1, 7) },
		type: 'AI Engineering',		
		skills: getSkills('python', 'git'),		
		color: '#ffffff00',
		links: [{ to: 'https://www.pearltrees.com', label: 'Website', newTab: true}],
		logo: Assets.Pearltrees,
		shortDescription: 'Manage an AI engineering team',
		description: '',
	},
	{
		slug: 'ds-shift',
		company: 'Shift Technology',
		name: 'Senior Data and Software Engineer',
		contract: ContractType.FullTime,
		location: 'Paris',
		period: { from: new Date(2021, 12 - 1, 1), to: new Date(2025, 4 - 1, 7) },
		type: 'Software and Data Engineering',		
		skills: getSkills('csharp', 'sql', 'teamcity', 'python', 'git', 'github', 'octopus', 'rider', 'project_management', 'client_facing', 'management'),		
		color: '#ffffff00',
		links: [{ to: 'https://www.shift-technology.com', label: 'Website', newTab: true}],
		logo: Assets.ShiftTechnology,
		shortDescription: 'Developing a fraud detection SaaS software for insurance industry.',
		description: shift,
	},
	{
		slug: 'dev-klee',
		company: 'Klee Group',
		name: 'Software Engineer Consultant',
		contract: ContractType.FullTime,
		location: 'Le-Plessis-Robinson (92)',
		period: { from: new Date(2020, 9 - 1, 1), to: new Date(2021, 11 - 1, 30) },
		type: 'Software Development',		
		skills: getSkills('java', 'oracle', 'jenkins', 'tortoise-svn', 'mantis-bt', 'sonarqube', 'eclipse', 'project_management', 'client_facing'),		
		color: '#ffffff00',
		links: [{ to: 'https://www.kleegroup.com', label: 'Website', newTab: true}],
		logo: Assets.KleeGroup,
		shortDescription: 'Software engineer consultant operating on OpenData and mobile app projects.',
		description: klee,
	},
	{
		slug: 'consultant-tnp',
		company: 'TNP Consultants',
		name: 'Junior Data Scientist Consultant',
		contract: ContractType.FullTime,
		location: 'Luxembourg',
		period: { from: new Date(2019, 3 - 1, 1), to: new Date(2019, 8 - 1, 30) },
		type: 'Data Science, Consulting',		
		skills: getSkills('python', 'aws', 'powerbi', 'js', 'dataiku', 'rfp', 'client_facing'),		
		color: '#ffffff00',
		links: [{ to: 'https://www.tnpconsultants.com', label: 'Website', newTab: true}],
		logo: Assets.TnpConsultants,
		shortDescription: 'Data scientist junior consultant within a rapidly growing subsidiary (Luxembourg) of a consulting firm.',
		description: tnp,
	},
	{
		slug: 'sec-natixis',
		company: 'Natixis',
		name: 'Cybersecurity Architect and Expert',
		contract: ContractType.FullTime,
		location: 'Paris',
		period: { from: new Date(2018, 9 - 1, 1), to: new Date(2019, 2 - 1, 28) },
		type: 'Cybersecurity',		
		skills: getSkills('powerbi', 'qualys', 'zap', 'checkmarx'),		
		color: '#ffffff00',
		links: [{ to: 'https://natixis.groupebpce.com', label: 'Website', newTab: true}],
		logo: Assets.Natixis,
		shortDescription: 'Audit company applications and assess cloud projects within the cybersecurity team.',
		description: natixis,
	},
	{
		slug: 'intern-airbus',
		company: 'Airbus Defence & Space',
		name: 'Software Engineer Intern',
		contract: ContractType.Internship,
		location: 'Elancourt (78)',
		period: { from: new Date(2017, 6 - 1, 1), to: new Date(2017, 7 - 1, 30) },
		type: 'Software Development',		
		skills: getSkills('cpp', 'python'),		
		color: '#ffffff00',
		links: [{ to: 'https://www.airbus.com', label: 'Website', newTab: true}],
		logo: Assets.Airbus,
		shortDescription: 'Internship in the Software Engineering team at Military Aircraft department.',
		description: airbus,
	},
];

export const title = 'Experience';
