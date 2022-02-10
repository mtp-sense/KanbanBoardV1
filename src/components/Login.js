import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const history = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    history("/desktop");
  };
  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <div className="row">
          <label className="col-6">Enter Username: </label>
          <input
            className="col-6"
            type="email"
            required
            placeholder="Enter email"
          />
        </div>
        <div className="row">
          <label className="col-6">Enter Password: </label>
          <input
            className="col-6"
            type="password"
            required
            placeholder="Enter password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
