import * as React from "react";
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.scss";

interface SearchBarProps {
	placeholder: string;
}

const SearchBar: FC<SearchBarProps> = (props: SearchBarProps) => {
	const [searchText, setSearchText] = React.useState("");
	const changeSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
		let value = event.target.value;
		setSearchText(value);
	};
	return (
		<div className="SearchBar">
			{window.innerWidth >= 1106 ? <h3>Search</h3> : null}
			<input
				type="text"
				value={searchText}
				onChange={changeSearchText}
				placeholder={props.placeholder}
			/>
			<button>
				<FontAwesomeIcon icon={faSearch} size="2x" color="#FFA000" />
			</button>
		</div>
	);
};

export default SearchBar;
