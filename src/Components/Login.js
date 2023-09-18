import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [value, setValues] = useState({
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    setValues({ ...value, [e.target.name]: e.target.value });
  };

  const click = (e) => {
    alert("form submitted successfully");
    e.preventDefault();
  };

  return (
    <>
      <div className="login template d-flex justify-content-center align-items-center vh-100 bg-img">
        <div className="form-container p-5 rounded border border-dark bg-transparent">
          <form onSubmit={click}>
            <h2 className="text-white text-center mb-3">Login</h2>

            <div className="mb-2 text-white">
              <label htmlFor="Email" class="form-label">
                Email
              </label>
              <input
                type="email"
                placeholder=" ENTER YOUR EMAIL"
                className="form-control"
                name="email"
                value={value.email}
                onChange={handelChange}
                required
              />
            </div>

            <div className="mb-2 text-white">
              <label htmlFor="password" class="form-label">
                Password
              </label>
              <input
                type="password"
                placeholder=" ENTER YOUR PASSWORD"
                className="form-control"
                name="password"
                value={value.password}
                onChange={handelChange}
                required
              />
            </div>

            <div className="mb-2 text-white ml-4">
              <input type="checkbox" class="form-check-input" id="Check" />
              <label className="custom-input-lable ms-2" htmlFor="Check">
                Remember Me
              </label>
            </div>

            <div className="d-grid">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>

            <p className="text-end mt-2 text-white">
              Forgot <Link to="/password">Password?</Link>
              <span className="mt-2 m-2">Don't have an account</span>
              <Link to="/signup" className="ms-2">
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
