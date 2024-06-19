import ReactDOM from "react-dom/client";
import Counter from "./Counter";
import FormComp from "./FormComp";
import "./style.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Counter />
    <FormComp />
  </>
);
