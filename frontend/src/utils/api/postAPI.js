import axios from 'axios'

export async function getPostLists() {
    const { data } = await axios.get('http://localhost:3002/api/posts');
    return data;
}

export async function getPostDetail(id) {
    const { data } = await axios.get(`http://localhost:3002/api/posts/${id}`);
    return data;
}