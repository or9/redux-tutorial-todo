var React = require("react");

module.exports = React.createClass({
	getInitialState: getInitialState,
	render: render,
	componentDidMount: componentDidMount
});

function render () {
	return (
		<div className="note">
			<h2>By cartesian standards, I am</h2>
			<input type="text" />
		</div>
	);
}

function componentDidMount () {
	//
}

function getInitialState () {
	return { data: [] };
}
