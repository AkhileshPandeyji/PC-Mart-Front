import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./redux";


ReactDOM.hydrate(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
