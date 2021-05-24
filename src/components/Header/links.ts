import {
	IconDefinition,
	faHome,
	faInfo,
	faAddressBook,
	faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
const links: Array<{
	title: string;
	url: string;
	icon: IconDefinition;
}> = [
	{
		title: "Home",
		url: "/home",
		icon: faHome,
	},
	{
		title: "About",
		url: "/about",
		icon: faInfo,
	},
	{
		title: "Contact Us",
		url: "/contact",
		icon: faAddressBook,
	},
	{
		title: "News",
		url: "/news",
		icon: faNewspaper,
	},
];

export default links;
