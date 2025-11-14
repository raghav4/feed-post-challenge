import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Signin } from "./components/Auth/Signin/Signin";
import { Signup } from "./components/Auth/Signup/Signup";
import { Composer } from "./components/Feed/Composer/Composer";
import { Post } from "./components/Feed/Post/Post";
import { ReactionType } from "./components/Feed/Post/Reaction/constants";
import { useInteraction } from "./hooks/useInteraction";
import { useAuthentication } from "./hooks/useAuthentication";

type PostType = {
  id: string;
  author: {
    name: string;
    imageUrl?: string;
  };
  content: string;
  timestamp: string;
  reaction?: ReactionType;
};

const initialPosts: Array<PostType> = [
  {
    id: "1",
    author: {
      name: "Theresa Webb",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    timestamp: "5 mins ago",
    reaction: "smile" as const,
  },
  {
    id: "2",
    author: {
      name: "John Doe",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    timestamp: "5 mins ago",
    reaction: "wow" as const,
  },
  {
    id: "3",
    author: {
      name: "Jane Doe",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    timestamp: "5 mins ago",
    reaction: "love" as const,
  },
];

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Array<PostType>>(initialPosts);

  const { isAuthenticated } = useAuthentication();

  const elementRef = useRef(null);

  const showLogin = !isAuthenticated && pathname === "/login";
  const showSignup = !isAuthenticated && pathname === "/signup";

  const closeModal = () => navigate("/");

  useInteraction(elementRef);

  const onClickPost = (postContent: string) => {
    setPosts((prevPosts) => [
      {
        id: `${prevPosts.length + 1}`,
        content: postContent,
        timestamp: Date.now().toLocaleString(),
        author: {
          name: "Atlys",
          imageUrl:
            "https://play-lh.googleusercontent.com/AwCJhJx0qCpdOazxUc0HWXWXn2PF3P1rAlqOzTKT1ifBoicZHPwoq9MjamhGpwzyfA",
        },
      },
      ...prevPosts,
    ]);
  };

  return (
    <div className="min-h-screen bg-white py-8" ref={elementRef}>
      <Composer onClickPost={onClickPost} />

      <div className="max-w-3xl mx-auto px-4 space-y-6">
        {posts.map(({ id, author, content, timestamp, reaction }) => (
          <Post
            key={id}
            author={author}
            content={content}
            timestamp={timestamp}
            reaction={reaction}
          />
        ))}
      </div>

      {showLogin && <Signin onClose={closeModal} />}
      {showSignup && <Signup onClose={closeModal} />}
    </div>
  );
}

export default App;
