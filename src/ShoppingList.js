import { useState } from "react";

const ShoppingList = () => {
  const [mylist, setmylist] = useState(["Tomato", "Potato", "Shirt"]);
  const [item, setItem] = useState("");
  const handleChange = (evt) => {
    setItem(evt.target.value);
  };
  const handleAdd = () => {
    setmylist([...mylist, item]);
    setItem("");
  };

  return (
    <>
      <h3>Creating Shopping List</h3>
      <input
        className="form_input"
        value={item}
        onChange={handleChange}
        placeholder="Enter Your List"
      ></input>
      {"\t"}
      {"\t"} {"\t"}
      {"\t"}
      {"\t"} {"\t"}
      <button onClick={handleAdd}>Add</button>
      <ul>
        {mylist.map(function (item) {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
};
export default ShoppingList;
