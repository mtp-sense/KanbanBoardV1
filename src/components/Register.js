import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    history("/desktop");
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    history("/login");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label className="col-6">Enter Name: </label>
          <input
            className="col-6"
            type="text"
            required
            placeholder="Enter name"
          />
        </div>
        <div className="row">
          <label className="col-6">Enter Username: </label>
          <input
            className="col-6"
            type="password"
            required
            placeholder="Enter username"
          />
        </div>
        <div className="row">
          <label className="col-6">Enter Contact Number: </label>
          <input
            className="col-6"
            type="tel"
            placeholder="Enter contact number"
          />
        </div>
        <div className="row">
          <label className="col-6">Enter Email: </label>
          <input
            className="col-6"
            type="email"
            required
            placeholder="Enter Email"
          />
        </div>
        <div className="row">
          <label className="col-6">Enter password: </label>
          <input
            className="col-6"
            type="password"
            required
            placeholder="Enter password"
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <div>
        <span>
          Already a user?
          <button className="btn btn-warning" onClick={handleSignIn}>
            Sign In
          </button>
        </span>
      </div>
    </div>
  );
}

export default Register;
