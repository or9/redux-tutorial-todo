/**
 * Action types
 */

export const ADD_TODO = "ADD_TODO"
export const COMPLETE_TODO = "COMPLETE_TODO"
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER"

/**
 * Other constants
 */

export const VISIBILITY_FILTERS = {
	SHOW_ALL: "SHOW_ALL",
	SHOW_COMPLETED: "SHOW_COMPLETED",
	SHOW_ACTIVE: "SHOW_ACTIVE"
}

/**
 * Action creators
 */

let nextTodoId = 0;

export function addTodo (text) {
	return {
		type: ADD_TODO,
		id: nextTodoId += 1,
		text
	};
}

export function completeTodo (id) {
	return { type: COMPLETE_TODO, id };
}

export function setVisibilityFilter (filter) {
	return { type: SET_VISIBILITY_FILTER, filter };
}

