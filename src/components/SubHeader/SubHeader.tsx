import * as React from "react";
import { FC } from "react";
import "./SubHeader.scss";
import sublinks from "./sublinks";
import SubNavbar from "./SubNavbar/SubNavbar";
import SubPoster from "./SubPoster/SubPoster";

interface SubHeaderProps {}

const SubHeader: FC<SubHeaderProps> = (props: SubHeaderProps) => {
	return (
		<div className="SubHeader">
			<SubNavbar links={sublinks} />
			<SubPoster />
		</div>
	);
};

export default SubHeader;
