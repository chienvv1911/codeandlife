import React, { useState } from 'react'
import axios from '../utils/api/baseAxios';
import CVEditor from '../components/common/CVEditor'

const CreatePostPage = () => {
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");
    const [content, setContent] = useState("");

    const createPostHandler = async (e) => {
        e.preventDefault();
        try {
            await axios.post('api/posts', {
                title,
                tag, 
                content,
                createdAt: new Date()
            })
            window.location.href= "/";
        } catch (error) {
            
        }
    }

    return (
        <div className="container">
            <input type="text" placeholder="Title" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
            <input type="text" placeholder="Tags" className="form-control my-3" value={tag} onChange={e => setTag(e.target.value)} />
            <CVEditor content={content} setContent={setContent} />
            <button onClick={createPostHandler} className="mt-3 btn btn-primary">Create Post</button>
        </div>
    )
}

export default CreatePostPage
