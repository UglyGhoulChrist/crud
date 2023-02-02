import React from "react";
import "./Card.scss";
import { BsX } from "react-icons/bs";
import Button from "./UI/Button";

function Card({ post, handlePostClick }) {
  return (
    <div className="card">
      <span className="card__id">id:{post.id} </span>
      <p className="card__text">{post.content}</p>
      <Button classMod={"button__red"}>
        <BsX
          onClick={() => {
            handlePostClick(post.id);
          }}
        />
      </Button>
    </div>
  );
}
export default Card;
