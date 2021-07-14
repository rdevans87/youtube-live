import axios from 'axios';
const clientID = process.env.REACT_APP_CLIENT_ID


const venueURL = 'https://api.seatgeek.com/2/venues?city=';
const performersURL = 'https://api.seatgeek.com/2/performers?slug=';
const eventsURL = 'https://api.seatgeek.com/2/events?performers.slug='



export default {
	getVenues: (query) => {
		console.log(venueURL + query + `&client_id=${clientID}`);
		return axios.get(venueURL + query + `&client_id=${clientID}`);
	},
	getPerformers: (query) => {
        console.log(performersURL + query + `&client_id=${clientID}`);
		return axios.get(performersURL + query + `&client_id=${clientID}`);
	},
	getEvents: (query) => {
        console.log(eventsURL + query + `&client_id=${clientID}`);
		return axios.get(eventsURL + query + `&client_id=${clientID}`);
	},
};