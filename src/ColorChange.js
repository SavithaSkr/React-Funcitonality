import { useState } from "react";
const ColorChange = () => {
  const [colorst, setcolorst] = useState(false);

  const handlecolor = () => {
    setcolorst(!colorst);
  };
  return (
    <>
      <h3>Change color by Clicking The button</h3>
      <div
        style={{
          backgroundColor: colorst ? "red" : "green",
          height: "100px",
          width: "100px",
        }}
      ></div>
      <br></br>
      <button onClick={handlecolor}>Change</button>
    </>
  );
};
export default ColorChange;
