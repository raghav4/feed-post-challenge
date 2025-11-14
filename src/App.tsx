import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { Signin } from "./components/Auth/Signin/Signin";
import { Signup } from "./components/Auth/Signup/Signup";
import { Composer } from "./components/Feed/Composer/Composer";
import { Post } from "./components/Feed/Post/Post";
import { ReactionType } from "./components/Feed/Post/Reaction/constants";
import { useInteraction } from "./hooks/useInteraction";
import { timeAgo } from "./utils/timeAgo";

type PostType = {
  id: string;
  author: {
    name: string;
    imageUrl?: string;
  };
  content: string;
  timestamp: string;
  reaction?: ReactionType;
  liked?: boolean;
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    timestamp: timeAgo(Date.now() - 5 * 60 * 1000),
    reaction: "smile",
  },
  {
    id: "2",
    author: {
      name: "John Doe",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    timestamp: timeAgo(Date.now() - 12 * 60 * 1000),
    reaction: "wow",
    liked: true,
  },
  {
    id: "3",
    author: {
      name: "Jane Doe",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    timestamp: timeAgo(Date.now() - 25 * 60 * 1000),
    reaction: "love",
  },
];

function App() {
  const { pathname } = useLocation();
  const [posts, setPosts] = useState<Array<PostType>>(initialPosts);

  const elementRef = useRef<HTMLDivElement | null>(null);

  const showLogin = pathname === "/signin";
  const showSignup = pathname === "/signup";

  useInteraction(elementRef);

  const onClickPost = (postContent: string) => {
    const createdAt = Date.now();

    setPosts((prev) => [
      {
        id: crypto.randomUUID(),
        content: postContent,
        timestamp: timeAgo(createdAt),
        author: {
          name: "John Doe",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_R_vlnUz9UhylMPCccagw4dMqhbs4UMPAA&s",
        },
      },
      ...prev,
    ]);
  };

  return (
    <div>
      <AppHeader />
      <div className="min-h-screen bg-white py-8" ref={elementRef}>
        <Composer onClickPost={onClickPost} />

        <div className="max-w-3xl mx-auto px-4 space-y-6">
          {posts.map(({ id, author, content, timestamp, reaction, liked }) => (
            <Post
              key={id}
              author={author}
              content={content}
              timestamp={timestamp}
              reaction={reaction}
              liked={liked}
            />
          ))}
        </div>

        {showLogin && <Signin />}
        {showSignup && <Signup />}
      </div>
    </div>
  );
}

export default App;
