import { PostData, PostModalProps } from "@/interfaces";
import React, { useState } from "react";

const PostModal: React.FC = () => {
  const [post, setPost] = useState<PostData>({
    userId: 1,
    title: "",
    body: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(post);
    onClose();
  };

  return (
    <div>
      <div>
        <h2>Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userId">User ID</label>
            <input
              type="number"
              id="userId"
              value={post.userId}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}
            />
          </div>
        </form>

        <div>
          <label htmlFor="body">Body</label>
          <textarea
            name="body"
            id="body"
            value={post.body}
            onChange={handleChange}
            rows={4}
          />
        </div>

        <div>
          <button type="button" onClick={onclose}>
            Cancle
          </button>
          <button type="submit">Add Post</button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
