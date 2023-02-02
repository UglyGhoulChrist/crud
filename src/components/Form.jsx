import React from "react";
import Button from "./UI/Button";
import { BsArrowReturnLeft } from "react-icons/bs";
import "./Form.scss";

function Form() {
  return (
    <form className="form">
      <label>
        <h3>New Note</h3>
      </label>
      <textarea className="textarea" type="text" />
      <Button classMod="button__blue">
        <BsArrowReturnLeft />
      </Button>
    </form>
  );
}

export default Form;
