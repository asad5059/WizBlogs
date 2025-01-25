import React, { useEffect, useState } from "react"
import { getAllBlogs } from "../urlDispatcher";
import './App.css';

const BlogCard = ({ blog }) => (
  <article key={blog.id} className="blog-card">
    <h2 className="blog-title">{blog.title}</h2>
    <p className="blog-content">{blog.content}</p>
    <div className="blog-footer">
      <button className="read-more">Read More</button>
    </div>
  </article>
);

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await getAllBlogs();
      setBlogs(response);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>WizBlogs</h1>
        <p className="subtitle">Your Daily Dose of Wizardry</p>
      </header>
      
      <main className="blog-grid">
        {blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </main>
    </div>
  )
}

export default App
