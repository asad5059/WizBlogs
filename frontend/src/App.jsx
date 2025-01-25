import React, { useEffect, useState } from "react"
import { getAllBlogs } from "../urlDispatcher";

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
    <>
     <h1>WizBlogs</h1>
     {blogs.map(blog => (
       <div key={blog.id}>
         <h2>{blog.title}</h2>
         <p>{blog.content}</p>
       </div>
     ))}
    </>
  )
}

export default App
