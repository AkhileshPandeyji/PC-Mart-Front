import loadable from "@loadable/component";

const Home = loadable(
	() => import(/* webpackChunkName:HomeChunk*/ "../components/Pages/Home/Home")
);
const Contact = loadable(
	() =>
		import(
			/* webpackChunkName:ContactChunk*/ "../components/Pages/Contact/Contact"
		)
);
const About = loadable(
	() =>
		import(/* webpackChunkName:AboutChunk*/ "../components/Pages/About/About")
);
const News = loadable(() => import(/**/ "../components/Pages/News/News"));

const routes: Array<{
	path: string;
	component: any;
	exact: boolean;
	serverFetch: any;
}> = [
	{
		path: "/",
		component: Home,
		exact: true,
		serverFetch: null,
	},
	{
		path: "/contact",
		component: Contact,
		exact: true,
		serverFetch: null,
	},
	{
		path: "/about",
		component: About,
		exact: true,
		serverFetch: null,
	},
	{
		path: "/news",
		component: News,
		exact: true,
		serverFetch: null,
	},
];

export default routes;
