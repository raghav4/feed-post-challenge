import { Post } from "./components/Feed/Post/Post";

function App() {
  return (
    <div>
      <Post
        author={{ name: "John Doe", imageUrl: "https://placehold.co/48" }}
        content="Lorem ipsum"
        timestamp="5 mins ago"
      />
    </div>
  );
}

export default App;
