import React from "react"
import { render } from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import App from "./containers/TodoApp"
import todoAppReducer from "./reducers"

let store = createStore(todoAppReducer);

let rootElement = document.getElementById("root");

render(
	<Provider store={ store }>
		<App />
	</Provider>,

	rootElement
)
