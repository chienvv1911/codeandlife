import axios from '../api/baseAxios';

export async function getPostLists() {
    const { data } = await axios.get('posts');
    return data;
}

export async function getPostDetail(id) {
    const { data } = await axios.get(`posts/${id}`);
    return data;
}

export async function deletePost(id) {
    const { data } = await axios.delete(`posts/${id}`)
    return data;
}