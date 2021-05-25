import * as React from "react";
import { FC } from "react";
import "./SubPoster.scss";
import PosterPic from "../../../assets/defaultPoster.jpg";

interface SubPosterProps {
	imgSrc?: string;
}

const SubPosterDefaults: SubPosterProps = {
	imgSrc: PosterPic,
};

const SubPoster: FC<SubPosterProps> = (props: SubPosterProps) => {
	return (
		<div className="SubPoster">
			<img src={props.imgSrc} alt="Poster ad" />
		</div>
	);
};
SubPoster.defaultProps = SubPosterDefaults;
export default SubPoster;
