import * as React from "react";
import { FC } from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import "./SubNavbarItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SubNavbarItemProps {
	title: string;
	icon?: IconDefinition;
}

const SubNavbarItem: FC<SubNavbarItemProps> = (props: SubNavbarItemProps) => {
	return (
		<div className="SubNavbarItem">
			<FontAwesomeIcon icon={props.icon ? props.icon : null} color="#ffa000" />
			<h4>{props.title}</h4>
		</div>
	);
};
export default SubNavbarItem;
