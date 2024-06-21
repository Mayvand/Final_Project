import axios from 'axios';

const httpClient = axios.create({
	baseURL: 'https://dummyjson.com/',
	timeout: 600000,
});

export default httpClient;
