import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

import cryptomons from '../md/projects/cryptomons.md?raw';
import publication from '../md/projects/publication.md?raw';
import wizair from '../md/projects/wizair.md?raw';
import uav_experience from '../md/projects/uav-experience.md?raw';

export const items: Array<Project> = [
	{
		slug: 'publication-game-theory',
		color: '#ffffff00',
		description: publication,
		shortDescription: 'Pure Bayesian Nash Equilibrium on Bayesian Games with Multidimensional Vector Types and Linear Payoffs',
		links: [{ to: 'https://arxiv.org/abs/2310.13992', label: 'Arxiv' }],
		logo: Assets.Arxiv,
		name: 'Scientific paper publication',
		period: {
			from: new Date(2021, 9 - 1, 1), to: new Date(2023, 10 - 1, 21)
		},
		skills: getSkills('python'),
		type: 'Publication',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'cryptomons',
		color: '#ffffff00',
		description: cryptomons,
		shortDescription: 'Simple "game" to showcase a DApp (decentralized app) under Vue.js',
		links: [{ to: 'https://cryptomons.herokuapp.com', label: 'Demo' }],
		logo: Assets.Ethereum,
		name: 'Web Application interacting with Blockchain (DApp)',
		period: {
			from: new Date(2019, 12 - 1, 1), to: new Date(2020, 2 - 1, 15)
		},
		skills: getSkills('python'),
		type: 'Web / Blockchain',
		screenshots: []
	},
	{
		slug: 'wizair',
		color: '#ffffff00',
		description: wizair,
		shortDescription: '',
		links: [],
		logo: Assets.Unknown,
		name: '',
		period: {
			from: new Date(2017, 10 - 1, 1), to: new Date(2018, 6 - 1, 1)
		},
		skills: getSkills('python'),
		type: 'Entrepreneurship',
		screenshots: []
	},
	{
		slug: 'uav-experience',
		color: '#ffffff00',
		description: uav_experience,
		shortDescription: '',
		links: [],
		logo: Assets.Unknown,
		name: '',
		period: {
			from: new Date(2016, 10 - 1, 1), to: new Date(2017, 6 - 1, 1)
		},
		skills: getSkills('python'),
		type: 'Entrepreneurship',
		screenshots: []
	},

];

export const title = 'Projects';
