import React from "react";

function Blog({ posts, setPosts }) {
  
    // state when deleting a post 
    function handleDelete(indexToDelete) {
        setPosts(posts.filter((_, index) => index !== indexToDelete));
    }
    // something if all posts are deleted, page refresh shows default message
    let infoToDisplay;
    if (posts.length === 0) {
        infoToDisplay = <p>Use the NEW POST button to post.</p>;
    } else {
        // show all posts and info, and a delete button 
        infoToDisplay = (
            <div className="post-list">
                {posts.map((post, index) => (
                    <div className="post-card" key={index}>
                        <h3>{post.title}</h3>
                        <p className="post-info">By <strong>{post.author}</strong> on {post.timestamp}</p>
                        <p className="post-content">{post.content}</p>
                        <button className="btn-danger" onClick={() => handleDelete(index)}>Delete Memory</button>
                    </div>
                ))}
            </div>
        );
    }
    return (
        <div className="page-container">
            <h2>Recent Memories</h2>
            {infoToDisplay}
        </div>
    );
}

export default Blog;