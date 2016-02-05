import React from "react"
import { render } from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import App from "./containers/TodoApp"
import todoApp from "./reducers"

let store = createStore(todoApp, window.STATE_FROM_SERVER);

console.log("init state", store.getState());

//let rootElement = document.getElementById("root");

/*
render(
	<Provider store={ store }>
		<App />
	</Provider>,

	rootElement
)
*/
