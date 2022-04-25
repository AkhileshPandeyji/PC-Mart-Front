import * as React from "react";
import { FC } from "react";
import "./Contact.scss";

interface ContactProps {}

const Contact: FC<ContactProps> = (props: ContactProps) => {
	return (
		<div className="Contact">
			<h1>Contact</h1>
		</div>
	);
};

export default Contact;
