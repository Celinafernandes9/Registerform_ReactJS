
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [value, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });


  const handelChange = (e) => {
    const {value, name} = e.traget;
    setValues({
      ...value,[name]: value  
    })
    }
  
    const click =(e)=>{
      alert("form submitted successfully")
      e.preventDefault();
     }
  
  return (
    <>
      <div className="signup template d-flex justify-content-center align-items-center vh-100 bg-img">
        <div className="form-container p-5 rounded bg-white border border-dark bg-transparent">
          <form onSubmit={click}>
            <h2 className="text-white text-center mb-3">Sign up</h2>

            <div className="mb-2 text-white">
              <label htmlFor="fname" class="form-label">
                First Name
              </label>
              <input
                type="text"
                placeholder=" ENTER YOUR FIRST NAME"
                className="form-control"
                name="firstname"
                value={value.firstname}
                onChange={handelChange}
                required
              />
            </div>
            <div className="mb-2 text-white">
              <label htmlFor="Lname" class="form-label">
                Lirst Name
              </label>
              <input
                type="text"
                placeholder=" ENTER YOUR LAST NAME"
                className="form-control"
                name="lastname"
                value={value.lastname}
                onChange={handelChange}
                required
              />
            </div>
            <div className="mb-2 text-white">
              <label htmlFor="Email1" class="form-label" >
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
               required/>
            </div>

            <div className="d-grid mt-2">
              <button className="btn btn-primary"  type="submit">
                 Sign Up
              </button>
            </div>

            <p className="text-end mt-2 text-white">
              Already have an account
              <Link to="/" className="m-2">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
