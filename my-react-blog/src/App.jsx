import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar"; 
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import NewPost from "./pages/NewPost";
import "./App.css";

function App() {
  // Use useState to store and manage blog posts.
  const [posts, setPosts] = useState([
    {
      title: 'Hello, friend.',
      author: 'Heather Holt',
      content: 'Please post a message!',
      timestamp: new Date().toLocaleString()
    }
  ]);

  return (
    <BrowserRouter>
    <div className="app-container">
    <Navbar />
    <div className="main-content">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog posts={posts} setPosts={setPosts} />} />
        <Route path="/new-post" element={<NewPost setPosts={setPosts} />} />
        <Route path="*" element={
            <div className="page-container center-text" style={{ marginTop: "50px" }}>
                <h2 style={{ color: "#ff71ce" }}>404 - System Error</h2>
                <p>Baseline diagnostic failed. Memory fragment could not be located.</p>
                <Link to="/" className="btn-primary" style={{ marginTop: "25px" }}>Return to Baseline [Home]</Link>
            </div>
        } />
        </Routes>
        </div>
        <footer className="footer">
            <p>[[ Developed by Heather Holt ]]</p>
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;