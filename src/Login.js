import React from "react";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const data = {
    email: "",
    password: "",
  };
  const request = (e) => {
    console.log(data);
    e.preventDefault();
    fetch("http://localhost:4000/user/sign-in", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((dat) => {
        fetch("http://localhost:4000/user/auth", {
          method: "POST",
          headers: new Headers({
            Authorization: "Bearer " + dat.jwtToken,
            "Content-Type": "application/x-www-form-urlencoded",
          }),
        })
          .then((response) => response.json())
          .then((dat) => {
              console.log(dat);
            if (dat.isAuthenticated) {
              history.push({pathname : '/home', state : dat});
            } else {
              history.push('/login') 
            }
          });
      });
  };
  return (
    <>
      <form>
        <label>Email</label>
        <br />
        <input
          type="text"
          onChange={(e) => {
            data.email = e.target.value;
          }}
        ></input>
        <br />
        <label>Password</label>
        <br />
        <input
          type="text"
          onChange={(e) => {
            data.password = e.target.value;
          }}
        ></input>
        <br />
        <button onClick={request}>Submit</button>
      </form>
      <p>
        Don't have an account? <Link to="/">Sing Up</Link>
      </p>
    </>
  );
};

export default Login;
