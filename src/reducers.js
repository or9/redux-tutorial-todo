import { combineReducers } from "redux"

const initialState = {
	visibilityFilter: "SHOW_ALL",
	todos: []
}

const todoApp = combineReducers({
	visibilityFilter,
	todos
})

const todo = (state, action) => {
	console.log("much ado about todo", state, action);
	switch (action.type) {
		case "ADD_TODO":
			return {
				id: action.id,
				text: action.text,
				completed: false
			}

		case "TOGGLE_TODO":
			if (state.id !== action.id) {
				return state
			}

			return {
				...state,
				completed: !state.completed
			}

		default:
			return state
	}
}

function todos (state = [], action)
{
	console.log("doing something with todos: ", state, action);
	switch (action.type) {
		case "ADD_TODO":
			return [
				...state,
				{
					text: action.text,
					completed: false
				}
			]
		case "TOGGLE_TODO":
			return  state.map(t =>
					  todo(t, action)
					 )
		default:
			return state
	}
}

function visibilityFilter (state = "SHOW_ALL", action) 
{
	switch (action.type) {
		case "SET_VISIBILITY_FILTER":
			return action.filter
			
		default:
			return state
	}
}

export default todoApp

