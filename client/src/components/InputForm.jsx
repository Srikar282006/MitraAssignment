import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function InputForm({ setIsOpen, mode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] =useState(mode === "signup");
  const [error, setError] = useState("");
  const nav=useNavigate()

const handleOnSubmit = async (e) => {
  e.preventDefault();

  const endpoint = isSignUp ? "signUp" : "login";

  try {
    const res = await axios.post(`http://localhost:5000/${endpoint}`, {
      email,
      password
    });

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    toast.success(isSignUp ? "Signup Successful" : "Login Successful");

    setIsOpen(false);
    nav(0);
  } catch (err) {
    toast.error(err.response?.data?.error || "Something went wrong");
  }
};


  return (
    <div className="w-96 bg-base-100 p-6 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-center mb-2">
        {isSignUp ? "Create Account" : "Welcome Back"}
      </h2>

      <p className="text-sm text-center text-gray-500 mb-4">
        {isSignUp
          ? "Register to continue"
          : "Login to access your account"}
      </p>

      <form onSubmit={handleOnSubmit} className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text font-medium">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full"
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter email"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text font-medium">Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered w-full"
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter password"
          />
        </div>

        {error !== "" && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <button className="btn btn-primary w-full mt-2">
          {isSignUp ? "Sign Up" : "Login"}
        </button>
      </form>

      <p
        className="text-center text-sm mt-4 cursor-pointer text-blue-600 hover:underline"
        onClick={() => setIsSignUp((pre) => !pre)}
      >
        {isSignUp ? "Already have an account? Login" : "Create new account"}
      </p>
    </div>
  );
}
