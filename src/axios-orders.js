import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fir-react-burger-builder.firebaseio.com/'
});

export default instance;
