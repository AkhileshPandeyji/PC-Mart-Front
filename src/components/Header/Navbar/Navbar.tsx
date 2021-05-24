import * as React from "react";
import { FC } from "react";
import "./Navbar.scss";
import NavbarItem from "./NavbarItem/NavbarItem";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {
	links: Array<{
		title: string;
		url: string;
		icon?: IconDefinition;
	}>;
}

const Navbar: FC<NavbarProps> = (props: NavbarProps) => {
	return (
		<div className="Navbar">
			{props.links.map((link, idx) => {
				return (
					<NavbarItem
						title={link.title}
						icon={link.icon ? link.icon : null}
						key={idx}
					/>
				);
			})}
		</div>
	);
};

export default Navbar;
