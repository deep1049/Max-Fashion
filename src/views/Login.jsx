import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigateTo = useNavigate();
  const HandleChange = (evt) => {
    let { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("form data", formData);
    localStorage.setItem("user", formData.email);
    alert(`Welcome`);
    navigateTo("/");
  };
  return (
    <div className="login">
      <h1>Sign In</h1>
      <form onSubmit={HandleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={HandleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={HandleChange}
          required
        />
        <button type="submit">Sign In</button>
        <a href="/signup">Sign Up</a>
      </form>
    </div>
  );
};

export default Login;
