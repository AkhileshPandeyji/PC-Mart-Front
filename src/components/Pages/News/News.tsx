import * as React from "react";
import { FC } from "react";
import "./Contact.scss";

interface NewsProps {}

const News: FC<NewsProps> = (props: NewsProps) => {
	return (
		<div className="News">
			<h1>News</h1>
		</div>
	);
};

export default News;
