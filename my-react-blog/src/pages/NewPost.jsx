import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewPost({ setPosts }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

    // check for empty fields 
        if (!title.trim() || !author.trim() || !content.trim()) {
            setError("Oops! Please fill out all boxes before submitting.");
            return;
        }
        setError(""); // clear errors

    // new post object title name text and timestamp
        const newPost = { 
        title: title, 
        author: author, 
        content: content, 
        timestamp: new Date().toLocaleString() 
        };
    
    // state updated when new post made and put at the top 
        setPosts((prevPosts) => [newPost].concat(prevPosts));

    // back to blog page after submitting 
        navigate('/blog');
    }

    return (
        <div className="page-container">
        <h2>Memory Recall</h2>
        {/* inputs for title name text and timestamp, and a submit button */}
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit} className="post-form">
            <div className="form-group">
            <label>Title:</label>
            <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="LAPD Bladerunner Division Report 254"
            />
            </div>

            <div className="form-group">
            <label>Your Name:</label>
            <input
                type="text"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
                placeholder="Agent KD6-3.7"
            />
            </div>

            <div className="form-group">
                <label>Message:</label>
                    <textarea
                        rows="6"
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                        placeholder="Enter your Nexus retirement details or memory reports here."
                ></textarea>
            </div>

            <button type="submit" className="btn-primary submit-btn">Submit</button>
        </form>
    </div>
  );
}

export default NewPost;