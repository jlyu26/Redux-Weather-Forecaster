import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};

		this.onInputChange = this.onInputChange.bind(this);
		// 等号右边： `this` is the instance of SearchBar, has a function called onInputChange()
		// bind that function to `this`, which is the SearchBar
		// and then use `=` to replace onInputChange() with this new bound instance of the function
		// the process is like overwriting the local method below
	}

	onInputChange(event) {
		console.log(event.target.value)	// JavaScript event handler
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		// we need to go and fetch weather data
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group" action="">
				<input
					placeholder="Get a five day forecast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}	
					// unless `() => {}`, when passing a call back as a function,
					// and that callback has a reference to `this`
					// need to bind context to make the callback function work
					// `this.onInputChange = this.onInputChange.bind(this);`
				 />
				<div className="input-group-append">
					<button type="submit" className="btn btn-outline-secondary">Submit</button>
				</div>
			</form>
		);
	}
}