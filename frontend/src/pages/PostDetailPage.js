import React, { useState, useEffect } from 'react'
import { getPostDetail, deletePost } from '../utils/api/postAPI';

const PostDetailPage = ({  match }) => {
    const [postDetail, setPostDetail] = useState({});

    useEffect(() => {
        async function fetchPostDetail() {
            const resPostDetail = await getPostDetail(match.params.id);
            setPostDetail(resPostDetail);
        }

        fetchPostDetail();
    }, [match])

    const deletePostHandler = async (e) => {
        e.preventDefault();
        let deletePostRes = await deletePost(match.params.id);
        if(deletePostRes) {
            window.location.href = "/"
        }
    }

    return (
        postDetail && 
        <div className="container">
            <p>{postDetail.title}</p>
            <div dangerouslySetInnerHTML={{ __html: postDetail.content }}>
            </div>

            <button className="btn btn-danger" onClick={deletePostHandler}>
                Delete
            </button>
        </div>
    )
}

export default PostDetailPage
