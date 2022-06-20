import React, { useState } from "react";
import { app } from "../src/firebase";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";
function UserAuth() {
  const auth = getAuth();
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((user) =>
      console.log(user)
    );
  };
  const signUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password).then((user) =>
      console.log(user)
    );
  };
  return (
    <div class="p-3 mb-2 bg-secondary text-white position-absolute top-50 start-50 translate-middle">
      <center>
        <br />
        <h1>USER AUTH SYSTEM</h1>
        <br />
        <br />
        <form>
          <input
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={changeHandler}
          />
          <br />
          <br />
          <input
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
            placeholder="password"
          />
          <br />
          <br />
          <button onClick={signIn} className="btn btn-primary">
            sign in
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={signUp} className="btn btn-primary">
            signup
          </button>
        </form>
      </center>
    </div>
  );
}
export default UserAuth;
