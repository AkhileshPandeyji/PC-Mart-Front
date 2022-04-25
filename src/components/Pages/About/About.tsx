import * as React from "react";
import { FC } from "react";
import "./Contact.scss";

interface AboutProps {}

const About: FC<AboutProps> = (props: AboutProps) => {
	return (
		<div className="About">
			<h1>About</h1>
		</div>
	);
};

export default About;
