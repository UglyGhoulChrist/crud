import React from "react";
import Card from "./Card";
import "./CardList.scss";

function CardList({ posts, handlePostClick }) {
  return (
    <div className="card-list">
      {posts.map((post) => (
        <Card key={post.id} post={post} handlePostClick={handlePostClick} />
      ))}
    </div>
  );
}
export default CardList;
