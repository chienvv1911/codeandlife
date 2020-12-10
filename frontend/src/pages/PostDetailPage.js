import React, { useState, useEffect } from 'react'
import { getPostDetail } from '../utils/api/postAPI';

const PostDetailPage = ({  match }) => {
    const [postDetail, setPostDetail] = useState({});

    useEffect(() => {
        async function fetchPostDetail() {
            const resPostDetail = await getPostDetail(match.params.id);
            setPostDetail(resPostDetail);
        }

        fetchPostDetail();
    }, [match])

    return (
        postDetail && 
        <div>
            <p>{postDetail.title}</p>
        </div>
    )
}

export default PostDetailPage
