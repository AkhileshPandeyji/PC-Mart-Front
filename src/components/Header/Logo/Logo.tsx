import * as React from "react";
import { FC } from "react";
import "./Logo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface LogoProps {
	width?: string;
	height?: string;
	imgSrc: string;
	title: string;
	tagLine?: string;
}

const Logo: FC<LogoProps> = (props: LogoProps) => {
	return (
		<div
			className="Logo"
			style={{
				width: props.width ? props.width : null,
				height: props.height ? props.height : null,
			}}
		>
			<div className="Logo-Img">
				<img src={props.imgSrc} />
			</div>

			<div className="Logo-Text">
				{window.innerWidth < 720 ? (
					<button>
						<FontAwesomeIcon icon={faBars} size="2x" color="white" />
					</button>
				) : (
					<>
						<div>
							<h3>{props.title}</h3>
						</div>
						<div>
							<p>{props.tagLine ? props.tagLine : null}</p>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Logo;
