import { FETCH_WEATHER } from '../actions/index' 

export default function(state=[], action) {	// store weather data in array
	// console.log('Action received', action);
	switch(action.type) {
		case FETCH_WEATHER:
			// using `concat()` to return new version of state without manipulate old one
			// return state.concat([ action.payload.data ]);
			return [ action.payload.data, ...state ];	// [ city, city, city ] NOT [ city, [ city, city ] ]
	}
	return state;
}