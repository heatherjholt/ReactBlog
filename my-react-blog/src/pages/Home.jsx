import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="page-container center-text">
        <h2>Welcome to my Re:Act B-log</h2>
        <p>Interactive blog built using React and React Router.</p>
        <p>Use the B-LOG link to see the latest posts and write your own.</p>
        <Link to="/blog" className="btn-primary">
            Access B-logs
        </Link>
        </div>
    );
}

export default Home;