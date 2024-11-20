import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

import cryptomons from '../md/projects/cryptomons.md?raw';
import publication from '../md/projects/publication.md?raw';
import portfolio from '../md/projects/portfolio.md?raw';
import wizair from '../md/projects/wizair.md?raw';
import uav_experience from '../md/projects/uav-experience.md?raw';

export const items: Array<Project> = [
	{
		slug: 'portfolio',
		color: '#ffffff00',
		description: portfolio,
		shortDescription: 'A simple portfolio with Svelte and hosted on GitHub Pages',
		links: [{ to: 'https://github.com/huot-s/portfolio', label: 'GitHub Repo'}],
		logo: Assets.Svelte,
		name: 'This Portfolio',
		period: {
			from: new Date(2024, 10 - 1, 1), to: new Date(2024, 11 - 1, 21)
		},
		skills: getSkills('github'),
		type: 'WebSite',
		screenshots: []
	},
	{
		slug: 'publication-game-theory',
		color: '#ffffff00',
		description: publication,
		shortDescription: 'Pure Bayesian Nash Equilibrium on Bayesian Games with Multidimensional Vector Types and Linear Payoffs',
		links: [{ to: 'https://arxiv.org/abs/2310.13992', label: 'Arxiv' }, {to: 'https://github.com/huot-s/pure_ne_multigames', label: 'GitHub Repo'}],
		logo: Assets.Arxiv,
		name: 'Scientific paper publication',
		period: {
			from: new Date(2021, 9 - 1, 1), to: new Date(2023, 10 - 1, 21)
		},
		skills: getSkills('python'),
		type: 'Publication',
		screenshots: []
	},
	{
		slug: 'cryptomons',
		color: '#ffffff00',
		description: cryptomons,
		shortDescription: 'Simple "game" to showcase a DApp (decentralized app) under Vue.js',
		links: [{ to: 'https://cryptomons.herokuapp.com', label: 'Demo' }, {to: 'https://github.com/huot-s/cryptomons', label: 'GitHub Repo'}],
		logo: Assets.Ethereum,
		name: 'Web Application interacting with Blockchain (DApp)',
		period: {
			from: new Date(2019, 12 - 1, 1), to: new Date(2020, 2 - 1, 15)
		},
		skills: getSkills('python'),
		type: 'Web / Blockchain',
		screenshots: [
			{
				label: 'Mobile version',
				src: Assets.ScreenCryptoMobile
			},
			{
				label: 'Desktop version',
				src: Assets.ScreenCryptoDesktop
			}
		]
	},
	{
		slug: 'wizair',
		color: '#ffffff00',
		description: wizair,
		shortDescription: 'Student Project Manager for the Development of a Connected Air Pollution Sensor (IoT)',
		links: [],
		logo: Assets.Project,
		name: 'Air pollution detector group project',
		period: {
			from: new Date(2017, 10 - 1, 1), to: new Date(2018, 6 - 1, 1)
		},
		skills: getSkills('python', 'management', 'project_management', 'entrepreneurship'),
		type: 'Entrepreneurship',
		screenshots: []
	},
	{
		slug: 'uav-experience',
		color: '#ffffff00',
		description: uav_experience,
		shortDescription: 'Member of a Student Project in an Incubator Focused on Drones',
		links: [],
		logo: Assets.Project,
		name: 'Autonomous Drone group project',
		period: {
			from: new Date(2016, 10 - 1, 1), to: new Date(2017, 6 - 1, 1)
		},
		skills: getSkills('python', 'entrepreneurship', 'rfp'),
		type: 'Entrepreneurship',
		screenshots: []
	},

];

export const title = 'Projects';
