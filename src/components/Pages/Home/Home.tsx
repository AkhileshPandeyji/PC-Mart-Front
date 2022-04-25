import * as React from "react";
import { FC } from "react";
import "./Home.scss";

interface HomeProps { };


const Home: FC<HomeProps> = (props: HomeProps) => {
	return (
		<div className="Home">
			<h1>Home</h1>
		</div>
	);
};

export default Home;
