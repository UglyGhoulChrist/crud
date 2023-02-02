import React from "react";
import "./Card.scss";
import { BsX } from "react-icons/bs";
import Button from "./UI/Button";

function Card() {
  return (
    <div className="card">
      <p className="card__text">
        Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
        work correctly both with client-side routing and a non-root public URL.
        Learn how to configure a non-root public URL by running `npm run build`.
      </p>
      <Button classMod={"button__red"}>
        <BsX />
      </Button>
    </div>
  );
}
export default Card;
