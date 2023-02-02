import { useState, useEffect } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import "./App.scss";
import CardList from "./components/CardList";
import Form from "./components/Form";
import Button from "./components/UI/Button";

function App() {
  const URL = "http://localhost:7777/notes/";
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    console.log("Get posts start");
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setPosts(json)); // ToDo Разобраться с ответом
    console.log("Get posts end");
  };

  const deletePost = (id) => {
    console.log("Delete post start");
    fetch(URL + id, {
      method: "DELETE",
    }) // ToDo Разобраться с ответом
      .then((response) => ~~(response.status / 100) === 2 && getPosts());
    console.log("Delete post end");
  };
  const addPost = (newPost) => {
    console.log("Add post start");
    fetch(URL, {
      method: "POST",
      body: newPost,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }) // ToDo Разобраться с ответом
      .then((response) => ~~(response.status / 100) === 2 && getPosts());
    console.log("Add post end");
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <div className="title">
        <h1>Notes</h1>
        <Button classMod="button__green">
          <BsArrowRepeat onClick={() => getPosts()} />
        </Button>
      </div>
      <CardList posts={posts} handlePostClick={deletePost} />
      <Form addPost={addPost} />
    </div>
  );
}

export default App;
