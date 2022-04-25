import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.hydrate(
	<BrowserRouter basename={__dirname}>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
