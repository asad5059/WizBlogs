import React, { useState } from 'react';
import RichTextEditor from '../RichTextEditor';
import { createBlog } from '../../../urlDispatcher';
import './BlogForm.css';

const BlogForm = ({ onBlogCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const blogData = {
        title,
        content
      };

      const response = await createBlog(blogData);
      setTitle('');
      setContent('');
      if (onBlogCreated) {
        onBlogCreated(response);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create blog post');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="blog-form">
      {error && <div className="error-message">{error}</div>}
      
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
          required
          disabled={isSubmitting}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <RichTextEditor
          value={content}
          onChange={setContent}
        />
      </div>

      <button 
        type="submit" 
        className="submit-button"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Publishing...' : 'Publish Blog'}
      </button>
    </form>
  );
};

export default BlogForm; 