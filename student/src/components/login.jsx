import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Login({ setIsAuthenticated }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const api = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${api}/login`, form);
      console.log(response)
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        setIsAuthenticated(true);
        setError("");
        setSuccessMsg("Login successful! Redirecting...");
        setTimeout(() => {
          setSuccessMsg("");
          navigate('/home');
        }, 150);
      } else {
        setError("Invalid email or password");
        setSuccessMsg("");
      }
    } catch (err) {
      setError("Error logging in. Please try again.");
      setSuccessMsg("");
      console.error(err);
    }
    setForm({ email: "", password: "" });
  };

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600/95 backdrop-blur shadow-lg h-14 flex items-center justify-between px-4 animate-slide-down">
        <div className="text-white text-xl sm:text-2xl font-extrabold tracking-wide">
          Student Management
        </div>
        <div>
          
        </div>
      </nav>
      <div className="max-w-md mx-auto m-30 p-6 bg-amber-100 shadow-lg rounded-md">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Sign in to your account</h2>

          {error && <div className="p-2 mb-4 text-white bg-red-500 rounded">{error}</div>}
          {successMsg && <div className="p-2 mb-4 text-white bg-green-500 rounded">{successMsg}</div>}

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={form.password}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none  text-gray-700"
              placeholder="password"
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Sign In</button>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
          </p>
          <p className="mt-4 text-center text-sm text-gray-600">
            <Link to="/forgetpassword" className="text-blue-600 hover:underline">Forgot Password ?</Link>
          </p>
        </form>
      </div>
    </>
  );
}
