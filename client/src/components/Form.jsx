import { useRef } from "react";
import Button from "./UI/Button";
import { BsArrowReturnLeft } from "react-icons/bs";
import "./Form.scss";

function Form({ addPost }) {
  const textAreaRef = useRef("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const text = textAreaRef.current.value.trim();
    if (text) {
      addPost(
        JSON.stringify({
          content: text,
          id: ~~(Math.random() * 1000),
        })
      );
      // ToDo Сделать очистку формы - сделал
      textAreaRef.current.value = "";
    } else {
      textAreaRef.current.classList.add("textarea__not-text");
      textAreaRef.current.focus();
      setTimeout(() => {
        textAreaRef.current.classList.remove("textarea__not-text");
      }, 1000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        <h3>New Note</h3>
      </label>
      <textarea ref={textAreaRef} className="textarea" type="text" />
      <Button classMod="button__blue">
        <BsArrowReturnLeft />
      </Button>
    </form>
  );
}

export default Form;
