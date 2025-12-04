import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Sébastien';

export const lastName = 'Huot';

export const description =
	'Results-driven IA/Data and Software Engineer with over six years of experience in software development, data analysis, agentic IA and strong academic background in Computer Science. Proven ability to collaborate and deliver tailored solutions to enhance user experiences.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/huot-s' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/huots/'
	},
	{
		platform: Platform.Email,
		link: 'sebastien.huot@protonmail.com'
	}
];

export const skills = getSkills('csharp', 'python', 'sql', 'git', 'github', 'teamcity', 'octopus', 'js', 'css', 'html');
