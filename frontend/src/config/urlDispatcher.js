import config from './config.json';
import axios from 'axios';

export const getAllBlogs = async () => {
    const url = config.devHost + config.blog.getAllBlogs.endpoint;
    const response = await axios.get(url);
    return response.data;
};

export const createBlog = async (blogData) => {
    const url = config.devHost + config.blog.createBlog.endpoint;
    const response = await axios.post('http://127.0.0.1:8000/blog/', blogData);
    return response.data;
};
