import * as React from "react";
import { FC } from "react";
import "./UserProfileHeader.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

interface UserProfileHeaderProps {
	name?: string,
	imgSrc: string,
	nItems?: number,
}

const UserProfileHeader: FC<UserProfileHeaderProps> = (
	props: UserProfileHeaderProps
) => {
	return (
		<div className="UserProfileHeader">
			<div className="UserProfileHeader-Image">
				<img src={props.imgSrc} alt="profile-picture" />
			</div>
			{window.innerWidth > 720 ? (
				<div className="UserProfileHeader-Text">
					<p>{props.name ? props.name : "Guest"}</p>
				</div>
			) : null}
			<div className="UserProfileHeader-Cart">
				<FontAwesomeIcon icon={faShoppingBag} color="#FFA000" size="2x" />
				<h3>{props.nItems ? props.nItems : "0"}</h3>
			</div>
		</div>
	);
};

export default UserProfileHeader;
