import React, { useEffect, useState } from "react"
import { getAllBlogs } from "../urlDispatcher";
import BlogForm from './components/BlogForm';
import Navbar from './components/Navbar';
import './App.css';

const BlogPost = ({ blog }) => (
  <article className="blog-post">
    <h2 className="blog-title">{blog.title}</h2>
    <div 
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: blog.content }}
    />
    <div className="blog-footer">
      <button className="read-more">Read More</button>
    </div>
  </article>
);

function App() {
  const [blogs, setBlogs] = useState([]);
  const [showBlogForm, setShowBlogForm] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await getAllBlogs();
      setBlogs(response);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="app">
      <Navbar onCreateBlogClick={() => setShowBlogForm(true)} />
      
      <div className="content">
        {showBlogForm ? (
          <div className="blog-form-container">
            <div className="blog-form-header">
              <h2>Create New Blog</h2>
              <button 
                className="close-button"
                onClick={() => setShowBlogForm(false)}
              >
                ×
              </button>
            </div>
            <BlogForm 
              onBlogCreated={(newBlog) => {
                setBlogs([newBlog, ...blogs]);
                setShowBlogForm(false);
              }} 
            />
          </div>
        ) : (
          <main className="blog-list">
            {blogs.map(blog => (
              <BlogPost key={blog.id} blog={blog} />
            ))}
          </main>
        )}
      </div>
    </div>
  )
}

export default App
