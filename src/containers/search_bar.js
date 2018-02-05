import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};

		// 等号右边： `this` is the instance of SearchBar, has a function called onInputChange()
		// bind that function to `this`, which is the SearchBar
		// and then use `=` to replace onInputChange() with this new bound instance of the function
		// the process is like overwriting the local method below		
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {	// JavaScript event handler
		// console.log(event.target.value)
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		// we need to go and fetch weather data
		this.props.fetchWeather(this.state.term);	// pass in the city string
		this.setState({ term: '' });
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

// make sure the action flows down into the middleware and then the 
// reducers inside Redux application
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

// Previously we had containers where we map dispatch to props (2nd argument),
// and state to props (1st argument) as well:
// `export default connect(mapStateToProps, mapDispatchToProps)(BookList);`
// So the only reason we're passing `null` as first argument is, whenever we're passing in
// a function that is supposed to map dispatch to the props of container, it always
// goes in as the second argument.
// `null` here means this particular container doesn't care about the state Redux is maintaining.
export default connect(null, mapDispatchToProps)(SearchBar);