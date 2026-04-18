# Re:Act Blog Application 

**[LIVE DEMO](https://heatherjholt.github.io/ReactBlog/)**

https://heatherjholt.github.io/ReactBlog/

**Re:Act**, a dynamic, single-page blog application built with React and React Router.

## Features

* **Dynamic State Management:** Add and delete blog posts in real-time using React's `useState` hook.
* **Client-Side Routing:** Navigate between Home, Blog, and New Post pages using `react-router-dom`.
* **Form Validation:** Users cannot submit blank or incomplete blog posts.
* **Retro-Futuristic UI:** Fully custom CSS styling with neon glows and a cyberpunk asthetic.
* **Responsive Design:** Adapts cleanly to both desktop and mobile.
* **404 Handling:** A custom wildcard route catches broken links.

## Technologies Used

* **React (v18):** Frontend UI library.
* **Vite:** Next-generation frontend tooling for fast builds and hot module replacement.
* **React Router DOM:** For declarative routing and navigation.
* **Vanilla CSS:** Custom styling without the need for external UI frameworks.

## Installation & Setup

To run this project locally on your machine, follow these steps:

1. **Extract or Clone the Repository**
   
   Ensure you have the project folder on your local machine and open it in your terminal.

2. **Install Dependencies**
   
   Make sure you have [Node.js](https://nodejs.org/) installed, then run:
   ```bash
   npm install
   ```
3. **Start the Development Server**

    Spin up the Vite local server:

```Bash
npm run dev
```
5. View the App

    Open your browser and navigate to the local host link provided in your terminal (usually http://localhost:5173).

## Project Structure
```Plaintext
/my-react-blog
│── /src
│   │── /pages
│   │   ├── Home.jsx       # Welcome screen and intro
│   │   ├── Blog.jsx       # Displays list of posts and handles deletion
│   │   ├── NewPost.jsx    # Form for creating new entries
│   │   ├── NotFound.jsx   # 404 Error page
│   │── App.css            # Global Synthwave styles and layout
│   │── App.jsx            # Main routing and state management
│   │── main.jsx           # Application entry point
│   │── Navbar.css         # Styling for the navigation bar
│   │── Navbar.jsx         # Navigation links using React Router
```
## Usage

**Home**: The landing page of the application. Click the primary button to initialize the render and enter the blog.

**Blog**: View all current logs. Click the "Delete Post" button on any entry to permanently remove it from the state.

**New Post**: Fill out the baseline diagnostic record (Title, Name, and Message). Submitting a valid post will automatically redirect you back to the Blog page to view your new entry.

Developed as a dynamic React application project.