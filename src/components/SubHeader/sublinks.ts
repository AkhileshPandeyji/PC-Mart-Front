import {
	IconDefinition,
	faHome,
	faMicrochip,
	faKeyboard,
	faTv,
	faMemory,
	faHdd,
	faTablet,
	faCog,
	faTachometerAlt
} from "@fortawesome/free-solid-svg-icons";

const sublinks: Array<{
	title: string;
	url: string;
	icon: IconDefinition;
}> = [
	{
		title: "Processors",
		url: "/shop/processors",
		icon: faMicrochip,
	},

	{
		title: "Peripherals",
		url: "/shop/peripherals",
		icon: faKeyboard,
	},
	{
		title: "Monitors",
		url: "/shop/monitors",
		icon: faTv,
	},
	{
		title: "Memory",
		url: "/shop/ram",
		icon: faMemory,
	},

	{
		title: "Storage",
		url: "/shop/storage",
		icon: faHdd,
	},
	{
		title: "Cabinets",
		url: "/shop/cabinets",
		icon: faTablet,
	},
	{
		title: "MotherBoards",
		url: "/shop/motherboards",
		icon: faCog,
	},
	{
		title: "Graphic Cards",
		url: "/shop/gpu",
		icon: faTachometerAlt,
	},
];

export default sublinks;
