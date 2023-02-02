import { BsArrowRepeat } from "react-icons/bs";
import "./App.scss";
import CardList from "./components/CardList";
import Form from "./components/Form";
import Button from "./components/UI/Button";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Notes</h1>
        <Button classMod="button__green">
          <BsArrowRepeat />
        </Button>
      </div>

      <CardList />
      <Form />
    </div>
  );
}

export default App;
