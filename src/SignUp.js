import React from "react";
import {Link, useHistory} from 'react-router-dom';


const SignUp = () => {
  const data = {
    name: "",
    email: "",
    password: "",
  };
  const history = useHistory();
  const request = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/user/sign-up", {
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
              history.push('/') 
            }
          });
      });
  };
  return (
    <>
      <h1>Sing Up</h1>
      <form>
        <label>Name</label>
        <br></br>
        <input
          type="text"
          onChange={(e) => {
            data.name = e.target.value;
          }}
        ></input>
        <br></br>
        <label>Email</label>
        <br></br>
        <input
          type="text"
          onChange={(e) => {
            data.email = e.target.value;
          }}
        ></input>
        <br></br>
        <label>Password</label>
        <br></br>
        <input
          type="text"
          onChange={(e) => {
            data.password = e.target.value;
          }}
        ></input>
        <br></br>
        <button onClick={request}>Submit</button>
      </form>
      <p>
        already have an account? <Link to="/login" > Log in</Link>
      </p>
    </>
  );
};

export default SignUp;
