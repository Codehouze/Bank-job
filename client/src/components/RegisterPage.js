import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";

export default function RegisterPage() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupIsSuccessful, setSignupIsSuccessful] = useState(null);

  const updateFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const updateLastname = (e) => {
    setLastname(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/users/add", {
        firstname,
        lastname,
        emailaddress: email,
        password,
        role: "member",
      })
      .then(() => setSignupIsSuccessful(true))
      .catch(() => setSignupIsSuccessful(false));

    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");

  };
  if (signupIsSuccessful) {
    return (<Redirect to="/login" />)
  }

  return (
    <div>
      <NavBar />
      <div className="mt-5 center">
        {!signupIsSuccessful ? null : (
          <div
            className="alert alert-danger alert-dismissible fade show mb-0"
            role="alert"
          >
            User already exists!
          </div>
        )}
        <p className="logo">CREATE NEW ACCOUNT</p>
        <form className="mt-3" onSubmit={handleSubmit}>
          <small>first name</small>
          <input
            type="text"
            className="form-control"
            name="firstname"
            value={firstname}
            onChange={updateFirstname}
            required
            autoComplete="true"
          />
          <small>last name</small>
          <input
            type="text"
            className="form-control"
            name="lastname"
            value={lastname}
            onChange={updateLastname}
            required
            autoComplete="true"
          />
          <small>email</small>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={updateEmail}
            required
            autoComplete="true"
          />
          <small>password</small>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={updatePassword}
            required
            autoComplete="true"
          />
          <small>confirm password</small>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={updatePassword}
            required
            autoComplete="true"
          />
          <button type="submit" className="shadow btn-blue btn-block">
            <small>CREATE NEW ACCOUNT</small>
          </button>
        </form>
        <small>
          Already have an account? <Link to="/login">login</Link>
        </small>
      </div>
    </div>
  );
}
