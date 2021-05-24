import * as React from "react";
import { FC } from "react";
import Logo from "./Logo/Logo";
import LogoPic from "../../assets/logo.png";
import ProfilePic from "../../assets/profile.png";
import "./Header.scss";
import UserProfileHeader from "./UserProfileHeader/UserProfileHeader";
import SearchBar from "./SearchBar/SearchBar";
import links from "./links";
import Navbar from "./Navbar/Navbar";

interface HeaderProps {}

const Header: FC<HeaderProps> = (props: HeaderProps) => {
	return (
		<div className="Header">
			<Logo
				imgSrc={LogoPic}
				title="PC Mart"
				tagLine="Better Price Better Quality"
			/>
			{window.innerWidth > 720 ? <Navbar links={links} /> : null}
			{window.innerWidth > 720 ? (
				<SearchBar placeholder="Search Items" />
			) : null}

			<UserProfileHeader imgSrc={ProfilePic} name={"Akhilesh Kumar Pandey"} />
		</div>
	);
};

export default Header;
