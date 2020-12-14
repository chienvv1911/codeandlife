import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreatePostPage = () => {
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");
    const [content, setContent] = useState("");

    const createPostHandler = (e) => {
        e.preventDefault();

    }

    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
      
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
      
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
      
        ['clean']                                         // remove formatting button
      ];

    return (
        <div className="container">
            <input type="text" placeholder="Title" className="form-control" value={title} onChange={e => setTitle} />
            <input type="text" placeholder="Tags" className="form-control my-3" value={tag} onChange={e => setTag} />
            <ReactQuill theme="snow" value={content} onChange={setContent}  
                modules={{
                    toolbar: toolbarOptions
                }}/>
            <button onClick={createPostHandler} className="mt-3 btn btn-primary">Create Post</button>
        </div>
    )
}

export default CreatePostPage
