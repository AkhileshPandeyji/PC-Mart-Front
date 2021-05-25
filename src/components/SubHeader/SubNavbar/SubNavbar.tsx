import * as React from "react";
import { FC } from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import "./SubNavbar.scss";
import SubNavbarItem from "./SubNavbarItem/SubNavbarItem";

interface SubNavbarProps {
	links: Array<{
		title: string;
		url: string;
		icon: IconDefinition;
	}>;
}

const SubNavbar: FC<SubNavbarProps> = (props: SubNavbarProps) => {
	return (
		<div className="SubNavbar">
			{props.links.map((link, idx) => {
				return <SubNavbarItem title={link.title} icon={link.icon} key={idx} />;
			})}
		</div>
	);
};

export default SubNavbar;
