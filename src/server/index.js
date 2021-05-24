import express from "express";
import fs from "fs";
import ReactDOMServer from "react-dom/server";
import App from "../components/App";
import * as React from "react";
import store from "../redux";
import { Provider } from "react-redux";

const PORT = 3000 || process.env.PORT;
const app = express();

app.use(express.static("./client-prod-build"));

app.get("*", (req, res) => {
	const markup = ReactDOMServer.renderToString(
		<Provider store={store}>
			<App />
		</Provider>
	);
	fs.readFile("./client-prod-build/template.html", "utf8", (err, data) => {
		if (err) {
			console.log(err);
			return res.status(500).send("Internal Server Error");
		}
		data = data.replace(`<div id="root">`, `<div id="root">${markup}`);
		return res.status(200).send(data);
	});
});

app.listen(PORT, () => {
	console.log(`Server Listening To : ${PORT}`);
});
