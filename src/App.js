import React from "react";
import PostsList from "./features/posts/PostsList";
import "./App.css";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return <div className="App">
    <AddPostForm/>
    <PostsList/>
  </div>;
}

export default App;
