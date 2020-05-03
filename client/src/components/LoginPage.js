import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../contexts/context";
import { Link, Redirect } from "react-router-dom";
import Logo from "./Logo";
import axios from "axios";
import NavBar from "./NavBar";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false)

  const [
    isAuthenticated,
    setIsAuthenticated,
    ,
    setUserDetails,
  ] = useContext(AppContext);

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    users.map((user) => {
      if (user.emailaddress === email && user.password === password) {
        if (user.role === "admin") {
          setIsAdmin(true)
          console.log("User is admin")
          setIsAuthenticated(true)
        }

        setUserDetails(user)
        setIsAuthenticated(true)
        setIsLoggedIn(true)
      }
      return setIsLoggedIn(false);
    });

    setEmail("");
    setPassword("");
  };

  // ComponentDidMount
  useEffect(() => {
    let mounted = true;
    axios
      .get("http://localhost:5000/api/users")
      .then((result) => mounted ? setUsers(result.data) : null)
      .catch((err) => console.log(err));

    return () => mounted = false
  }, []);

  if (isAuthenticated) {
    if (isAdmin) {
      return (<Redirect to="/admin" />)
    }
    return (<Redirect to="/dashboard" />)
  }
  return (
    <div>
      {/* {isAdmin ? <Redirect to="/admin" /> : null}
      {isAuthenticated ? <Redirect to="/dashboard" /> : null} */}
      <NavBar />
      <div className=" center">
        <Logo />
        {isLoggedIn ? null : (
          <div
            className="alert alert-danger alert-dismissible fade show mb-0"
            role="alert"
          >
            Invalid credentials
          </div>
        )}
        <form className="mt-3" onSubmit={handleSubmit}>
          <small>email</small>
          <input
            type="text"
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
          <button type="submit" className="shadow btn-blue btn-block  mb-3">
            <small>LOGIN</small>
          </button>
        </form>
        <small>
          Don't have an account?{" "}
          <Link to="/register" className="pt-3">
            create account
          </Link>
        </small>
        <br />
        <small>
          <Link to="/" className="pt-3 ">
            fogot password?
          </Link>
        </small>
      </div>
    </div>
  );
};

export default LoginPage;
