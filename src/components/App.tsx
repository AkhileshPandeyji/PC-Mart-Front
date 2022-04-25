import * as React from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { authStart } from "../redux/modules/authDetails";
import Header from "./Header/Header";
import SubHeader from "./SubHeader/SubHeader";
import { Route, Switch } from "react-router-dom";
import routes from "../routes";

const App = () => {
	const dispatch = useAppDispatch();
	const isAuthenticating = useAppSelector((state) => {
		return state.authDetails.isAuthenticating;
	});
	const startAuth = () => {
		dispatch(authStart());
	};
	return (
		<div className="App">
			<Header />
			{window.innerWidth > 768 ? <SubHeader /> : null}
			{routes.map((route, idx) => {
				return <Route {...route} />;
			})}
			<Switch></Switch>
		</div>
	);
};
export default App;
