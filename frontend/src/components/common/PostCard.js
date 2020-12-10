import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = ({ post }) => {
    return (
        <div>
            <Link to={`posts/${post._id}`}>{post.title}</Link>
        </div>
    )
}

export default PostCard
