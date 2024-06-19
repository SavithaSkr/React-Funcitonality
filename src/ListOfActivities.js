import { useState } from "react";
const ListOfActivities = (props) => {
  const [checked, setcheck] = useState(false);
  const handlechange = () => {
    setcheck(!checked);
  };
  return (
    <>
      <input onChange={handlechange} type="checkbox" name="1"></input>
      <span style={{ textDecoration: checked ? "line-through" : "none" }}>
        {props.activity}
      </span>
      <br></br>
    </>
  );
};
export default ListOfActivities;
