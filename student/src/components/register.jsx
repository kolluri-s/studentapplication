import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function StudentRegistration() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(false);
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError(true);
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    try {
      const api = import.meta.env.VITE_API_URL;
      await axios.post(`${api}/register`, form);
      setSubmitted(true);
      setError(false);
      setForm({ name: "", email: "", password: "", phone: "", address: "" });
      setTimeout(() => {
        navigate("/login");
      }, 150);
    } catch (err) {
      console.error("Error saving student:", err);
      setError(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow">
        <h1 className="text-2xl font-semibold text-center text-indigo-700">
          Student Registration
        </h1>
        {error && (
          <div className="p-3 mb-2 text-white bg-red-500 rounded">
            Please fill in all required fields.
          </div> 
        )}
        {submitted && (
          <div className="p-3 mb-2 text-white bg-green-500 rounded">
            Registration successful! Welcome.
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded text-black opacity-60"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded text-black opacity-60"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded text-black opacity-60"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded text-black opacity-60"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded text-black opacity-60"
              placeholder="Enter your Address"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 font-bold text-white bg-indigo-600 rounded hover:bg-indigo-700"
          >
            Register
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
}
