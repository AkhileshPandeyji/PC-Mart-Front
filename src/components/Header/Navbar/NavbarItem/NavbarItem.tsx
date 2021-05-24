import * as React from "react";
import { FC } from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavbarItem.scss";

interface NavbarItemProps {
	title: string;
	icon?: IconDefinition;
}

const NavbarItem: FC<NavbarItemProps> = (props: NavbarItemProps) => {
	return (
		<div className="NavbarItem">
			<FontAwesomeIcon
				icon={props.icon ? props.icon : null}
				color="#FFA000"
			/>
			<h3>{props.title}</h3>
		</div>
	);
};

export default NavbarItem;
