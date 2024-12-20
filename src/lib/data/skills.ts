import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import csharp from '../md/csharp.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Languages', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'csharp',
		color: 'blue',
		description: csharp,
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'sql',
		color: 'yellow',
		description: '',
		logo: Assets.SQL,
		name: 'SQL',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'oracle',
		color: 'red',
		description: '',
		logo: Assets.Oracle,
		name: 'Oracle DB',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description: '',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'orange',
		description: '',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'cpp',
		color: 'blue',
		description: '',
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'git',
		color: 'orange',
		description: '',
		logo: Assets.Git,
		name: 'Git',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'tortoise-svn',
		color: 'blue',
		description: '',
		logo: Assets.TortoiseSVN,
		name: 'Tortoise SVN',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'eclipse',
		color: 'purple',
		description: '',
		logo: Assets.Eclipse,
		name: 'Eclipse',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'rider',
		color: 'blue',
		description: '',
		logo: Assets.Rider,
		name: 'JetBrains Rider',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'powerbi',
		color: 'yellow',
		description: '',
		logo: Assets.PowerBI,
		name: 'Power BI',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'dataiku',
		color: 'cyan',
		description: '',
		logo: Assets.Dataiku,
		name: 'Dataiku',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'qualys',
		color: 'red',
		description: '',
		logo: Assets.Qualys,
		name: 'Qualys',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'zap',
		color: 'blue',
		description: '',
		logo: Assets.Zap,
		name: 'ZAP',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'checkmarx',
		color: 'green',
		description: '',
		logo: Assets.Checkmarx,
		name: 'Checkmarx',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'aws',
		color: 'orange',
		description: '',
		logo: Assets.AWS,
		name: 'AWS',
		category: 'devops'
	}),
	defineSkill({
		slug: 'github',
		color: 'black',
		description: '',
		logo: Assets.GitHub,
		name: 'GitHub',
		category: 'devops'
	}),
	defineSkill({
		slug: 'octopus',
		color: 'blue',
		description: '',
		logo: Assets.Octopus,
		name: 'Octopus Deploy',
		category: 'devops'
	}),
	defineSkill({
		slug: 'teamcity',
		color: 'blue',
		description: '',
		logo: Assets.Teamcity,
		name: 'Teamcity',
		category: 'devops'
	}),
	defineSkill({
		slug: 'jenkins',
		color: 'blue',
		description: '',
		logo: Assets.Jenkins,
		name: 'Jenkins',
		category: 'devops'
	}),
	defineSkill({
		slug: 'sonar-qube',
		color: 'blue',
		description: '',
		logo: Assets.SonarQube,
		name: 'Sonar Qube',
		category: 'devops'
	}),
	defineSkill({
		slug: 'mantis-bt',
		color: 'green',
		description: '',
		logo: Assets.MantisBT,
		name: 'Mantis Bug Tracker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: '',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'project_management',
		color: 'lemonchiffon',
		description: '',
		logo: Assets.ProjectManagement,
		name: 'Project Management',
		category: 'soft'
	}),
	defineSkill({
		slug: 'rfp',
		color: 'lightblue',
		description: '',
		logo: Assets.Rfp,
		name: 'Request For Proposal',
		category: 'soft'
	}),
	defineSkill({
		slug: 'client_facing',
		color: 'lightcoral',
		description: '',
		logo: Assets.ClientFacing,
		name: 'Client Facing',
		category: 'soft'
	}),
	defineSkill({
		slug: 'management',
		color: 'lightcyan',
		description: '',
		logo: Assets.Management,
		name: 'Team Management',
		category: 'soft'
	}),
	defineSkill({
		slug: 'entrepreneurship',
		color: 'lightgray',
		description: '',
		logo: Assets.Entrepreneurship,
		name: 'Entrepreneurship',
		category: 'soft'
	}),
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
