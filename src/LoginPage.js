import { useState } from "react";

const LoginPage = () => {
  const [login, setlogin] = useState(false);
  const [uname, setuname] = useState("");
  const [upass, setpass] = useState("");
  const handlelogin = () => {
    var UserName = "new";
    var Password = "123";
    if (UserName == uname && Password == upass) {
      setlogin(true);
      console.log("success");
    }
  };
  const handleuname = (evt) => {
    setuname(evt.target.value);
  };
  const handlepass = (evt) => {
    setpass(evt.target.value);
  };
  return (
    <>
      <h3>Login Page</h3>
      {login ? (
        <h3>Login Successful</h3>
      ) : (
        <div>
          <input
            value={uname}
            onChange={handleuname}
            placeholder="UserName"
          ></input>
          <br></br> <br></br>
          <input
            value={upass}
            onChange={handlepass}
            placeholder="Password"
          ></input>
          <br></br> <br></br>
          <button onClick={handlelogin}>Login</button>
        </div>
      )}
    </>
  );
};
export default LoginPage;
