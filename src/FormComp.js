import { useState } from "react";
import ResultComp from "./ResultComp";
import ShoppingList from "./ShoppingList";
import ColorChange from "./ColorChange";
import ListOfActivities from "./ListOfActivities";
import List from "./List";
import LoginPage from "./LoginPage";

function FormComp() {
  const [firstname, setfname] = useState("");
  const [lastname, setlname] = useState("");
  const [result, setresult] = useState("Result");

  const handleFname = (event) => {
    setfname(event.target.value);
  };

  const handleLname = (event) => {
    setlname(event.target.value);
  };

  const handleResult = (event) => {
    event.preventDefault();
    setresult(firstname + " " + lastname);
  };

  return (
    <>
      <h3>Concat First Name and Last Name</h3>
      <form>
        <lable htmlFor="firstname">First Name:</lable>
        {"\t"}
        {"\t"} {"\t"}
        <input
          className="form_input"
          id="firstname"
          value={firstname}
          onChange={handleFname}
        ></input>
        <br></br> <br></br>
        <lable htmlFor="lastname">Last Name:</lable>
        {"\t"}
        {"\t"} {"\t"}
        <input
          className="form_input"
          id="lastname"
          value={lastname}
          onChange={handleLname}
        ></input>
        <br></br> <br></br>
        <input
          className="button-33"
          type="submit"
          onClick={handleResult}
        ></input>
      </form>
      <ResultComp result={result} />
      <hr></hr>
      <ShoppingList></ShoppingList>
      <hr></hr>
      <ColorChange />
      <List></List>
      <LoginPage />
    </>
  );
}
export default FormComp;
