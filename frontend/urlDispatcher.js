import config from './config.json';
import axios from 'axios';

export const getAllBlogs = async () => {
    const response = await axios.get('http://127.0.0.1:8000/blog/');
    return response.data;
};
