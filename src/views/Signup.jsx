import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
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
    if (formData.password !== formData.confirm_password) {
      alert(`Password and Confirm Password don't match!`);
      return;
    }
    alert(`Signup Successful! Please login to continue.`);
    navigateTo("/login");
  };
  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form onSubmit={HandleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={HandleChange}
          required
        />
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
        <input
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          value={formData.confirm_password}
          onChange={HandleChange}
          required
        />
        <button type="submit">Sign Up</button>
        <a href="/login">Sign In</a>
      </form>
    </div>
  );
};

export default Signup;
