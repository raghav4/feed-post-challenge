import { Post } from "./components/Feed/Post/Post";

const posts = [
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
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8">
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
    </div>
  );
}

export default App;
