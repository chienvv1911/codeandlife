import React, { useState, useEffect } from 'react'
import { getPostLists } from '../utils/api/postAPI';
import PostCard from '../components/common/PostCard';

const HomePage = () => {
    const [listPosts, setListPosts] = useState([]);

    useEffect(() => {
        async function fetchListPosts() {
            const resListPosts = await getPostLists();
            setListPosts(resListPosts);
        }

        fetchListPosts();
    }, [])

    return (
        listPosts && listPosts.length > 0 && <div className="container">
            {
               listPosts.map((post, index) => <PostCard post={post} key={index} />) 
            }
        </div>
    )
}

export default HomePage
