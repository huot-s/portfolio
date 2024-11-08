import type { Asset } from '$lib/types';
import { theme } from '$lib/stores/theme';
import { base } from '$app/paths';

const gh = (file: string) => `${base}/logos/${file}`;

const a = (light: string, dark?: string): Asset =>
	dark ? { dark: gh(dark), light: gh(light) } : gh(light);

const Assets = {
	AWS: a('aws.svg'),
	Bootstrap: a('bootstrap.svg'),
	C: a('c.svg'),
	Cpp: a('cpp.svg'),
	Numpy: a('numpy.svg'),
	Pandas: a('pandas.svg'),
	Docker: a('docker.svg'),
	Kubernetes: a('kubernetes.svg'),
	Csharp: a('csharp.svg'),
	VueJs: a('vue.png'),
	ReactJs: a('react.svg'),
	Python: a('python.png'),
	NodeJs: a('node.png'),
	Svelte: a('svelte.png'),
	JavaScript: a('js.png'),
	Java: a('java.png'),
	Android: a('android.png'),
	PostgreSQL: a('postgres.png'),
	Firebase: a('firebase.png'),
	Unknown: a('no-img.svg'),
	MongoDB: a('mongodb.svg'),
	HTML: a('html.svg'),
	Premiere: a('premiere.svg'),
	Photoshop: a('photoshop.svg'),
	CSS: a('css.svg'),
	AfterEffects: a('after-effects.svg'),
	Illustrator: a('illustrator.svg'),
	SQL: a('sqlserver.svg'),
	Git: a('git.svg'),
	GitHub: a('github.svg'),
	Teamcity: a('teamcity.svg'),
	Octopus: a('octopus.svg'),
	ShiftTechnology: a('shift-technology.jpg'),
	KleeGroup: a('klee-group.jpg'),
	TnpConsultants: a('tnp-consultants.jpg'),
	Natixis: a('natixis.jpg'),
	Airbus: a('airbus.jpg'),
	CentraleSupelec: a('centralesupelec.jpg'),
	ImperialCollege: a('imperial-college.jpg'),
	LyceeHoche: a('hoche.jpg'),
	Jenkins: a('jenkins.png'),
	TortoiseSVN: a('tortoise-svn.png'),
	MantisBT: a('mantis-bt.png'),
	SonarQube: a('sonarqube.png'),
	Eclipse: a('eclipse.svg'),
	Rider: a('rider.png'),
	Oracle: a('oracle.png')
};

export default Assets;

let currentTheme: boolean;

theme.subscribe((v) => (currentTheme = v));

export const getAssetURL = (asset: Asset): string => {
	return typeof asset === 'string' ? asset : currentTheme ? asset.dark : asset.light;
};
