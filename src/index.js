"use strict";

var React = require("react");
var ReactDOM = require("react-dom");
var marked = require("marked");
var gmService = require("./gm-service");
var Note = require("./Note");


// Static content
ReactDOM.render(
	<section>
		<h1>Hello again, World.</h1>
		<p>Some static content in ReactDOM render method</p>
		<p>This replaces the thing with ID of "header"</p>
	</section>,
	document.getElementById("header")
);

// Using module
ReactDOM.render(
	<Note />,
	document.getElementById("app")
);

