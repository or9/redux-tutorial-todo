import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"

import { addTodo, completeTodo, setVisibilityFilter, VISIBILITY_FILTERS } from "../actions"
import AddTodo from "../components/AddTodo"
import TodoList from "../components/TodoList"
import Footer from "../components/Footer"

class TodoApp extends Component {
	render () {
		// Injected by connect call
		const { dispatch, visibleTodos, visibilityFilter } = this.props
		return (
			<div>
				<AddTodo 
					onAddClick={ 
						text => dispatch(addTodo(text)) 
					} />

				<TodoList 
					todos={ visibleTodos }
					onTodoClick={ 
						id => dispatch(completeTodo(id)) 
					} />

				<Footer 
			       		filter={ visibilityFilter }
					onFilterChange={ 
						nextFilter => dispatch(setVisibilityFilter(nextFilter)) 
					} />

			</div>
		)
	}
}

TodoApp.propTypes = {
	visibleTodos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	}).isRequired).isRequired,

	visibilityFilter: PropTypes.oneOf([
		"SHOW_ALL",
		"SHOW_COMPLETED",
		"SHOW_ACTIVE"
	]).isRequired
}

function selectTodos (todos, filter) 
{
	switch (filter) {
		case VISIBILITY_FILTERS.SHOW_ALL:
			return todos

		case VISIBILITY_FILTERS.SHOW_COMPLETED:
			return todos.filter(todo => todo.completed)

		case VISIBILITY_FILTERS.SHOW_ACTIVE:
			return todos.filter(todo => !todo.completed)

	}
}

// Which props do we want to inject given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select (state)
{
	return {
		visibleTodos: selectTodos(state.todos, state.setVisibilityFilter),
		visibilityFilter: state.visibilityFilter
	};
}

// Wrap component to inject dispatch and state into it
export default connect(select)(TodoApp)

