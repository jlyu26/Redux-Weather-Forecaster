import axios from 'axios';

const API_KEY = '940f04364b8ffc9ea812a979c1c39086';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);	// return a promise, and passed into return as `payload`
	// This Ajax request is asynchronous in nature. But we don't
	// have to write code about it, all handled in redux-promise.

	// console.log('Request: ', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}