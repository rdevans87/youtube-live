import axios from 'axios';

export default {
	login: (userData) => {
		return axios.post('/api/user/login', userData);
	},
	signup: (userData) => {
		return axios.post('/api/user/signup', userData);
	},
	logout: () => {
		return axios.post('api/user/logout');
	},
};
