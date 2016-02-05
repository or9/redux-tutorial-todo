import { VISIBILITY_FILTERS, SET_VISIBILITY_FILTER, ADD_TODO, COMPLETE_TODO } from "./actions"
import { combineReducers } from "redux"

const initialState = {
	visibilityFilter: VISIBILITY_FILTERS.SHOW_ALL,
	todos: []
}

const todoApp = combineReducers({
	visibilityFilter,
	todos
})

export default todoApp


// combineReducers does the same thing as below code
/*
function todoApp (state = initialState, action) 
{
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return { ...state, ...newState }
			//return Object.assign({}, state, {
			//	visibilityFilter: action.filter
			//})

		case ADD_TODO:
		case COMPLETE_TODO:
			return Object.assign({}, state, {
				todos: todos(state.todos, action)
			})

		default:
			return state
	}
}
*/

function todos (state = [], action)
{
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					text: action.text,
					completed: false
				}
			]
		case COMPLETE_TODO:
			return [
				...state.slice(0, action.index),
				Object.assign({}, state[action.index], {
					completed: true
				}),
				...state.slice(action.index + 1)
			]
		default:
			return state
	}
}

function visibilityFilter (state = VISIBILITY_FILTERS.SHOW_ALL, action) 
{
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter
			
		default:
			return state
	}
}

