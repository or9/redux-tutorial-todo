import React, { Component, PropTypes } from "react"
import FilterLink from "../containers/FilterLink"

const Footer = () => (
	<p>Show:{" "}
	<FilterLink filter="SHOW_ALL">ALL</FilterLink>
	{", "}
	<FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
	{", "}
	<FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
	</p>
)

export default Footer

/*
export default class Footer extends Component {
	renderFilter (filter, name) {
		if (filter === this.props.filter) {
			return name;
		}

		return (
			<a href="#" onClick={ e => {
				e.preventDefault();
				this.props.onFilterChange(filter)
			}}>
				{ name }
			</a>
		)
	}

	render () {
		return (
			<p>
				Show
				{" "}
				{ this.renderFilter("SHOW_ALL", "All") }
				{", "}
				{ this.renderFilter("SHOW_COMPLETED", "Completed") }
				{", "}
				{ this.renderFilter("SHOW_ACTIVE", "Active") }
				.
			</p>
		)
	}
}

Footer.propTypes = {
	onFilterChange: PropTypes.func.isRequired,
	filter: PropTypes.oneOf([
		"SHOW_ALL",
		"SHOW_COMPLETED",
		"SHOW_ACTIVE"
	]).isRequired
}
*/

