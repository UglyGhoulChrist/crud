import { useState, useEffect } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import "./App.scss";
import CardList from "./components/CardList";
import Form from "./components/Form";
import Button from "./components/UI/Button";
import clsx from "clsx";

function App() {
  const URL = "http://localhost:7777/notes/";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPosts = () => {
    setLoading(true);
    console.log("Get posts start");
    // ! Имитация задержки сервера
    setTimeout(() => {
      fetch(URL)
        .then((response) => response.json())
        .then((json) => setPosts(json))
        .finally(() => setLoading(false)); // ToDo Разобраться с ответом
    }, 1000);
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
        <Button classMod={clsx("button__green", loading && "button_loading")}>
          <BsArrowRepeat onClick={() => getPosts()} />
        </Button>
      </div>
      <CardList posts={posts} handlePostClick={deletePost} />
      <Form addPost={addPost} />
    </div>
  );
}

export default App;
