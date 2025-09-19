import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId, id }) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
        <div>
          <span>User ID: {userId}</span>
          <span>Post ID: {id}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
