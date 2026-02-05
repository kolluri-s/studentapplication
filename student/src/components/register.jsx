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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(false);
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name) {
      setError(true);
      setErrorMessage("Name is required.");
      setTimeout(() => setError(false), 3000);
      return;
    }
    if (!form.email) {
      setError(true);
      setErrorMessage("Email is required.");
      setTimeout(() => setError(false), 3000);
      return;
    }
    if (!form.password) {
      setError(true);
      setErrorMessage("Password is required.");
      setTimeout(() => setError(false), 3000);
      return;
    }
    if (!form.phone) {
      setError(true);
      setErrorMessage("Phone number is required.");
      setTimeout(() => setError(false), 3000);
      return;
    }
    if (form.phone.length !== 10) {
      setError(true);
      setErrorMessage("Phone number must be exactly 10 digits.");
      setTimeout(() => setError(false), 3000);
      return;
    }


    try {
      const api = import.meta.env.VITE_API_URL;
      await axios.post(`${api}/register`, form);
      setSubmitted(true);
      setError(false);
      setForm({ name: "", email: "", password: "", phone: "", address: "" });
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.error("Error saving student:", err);
      setError(true);
      setErrorMessage("Server error. Please try again.");
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600/95 backdrop-blur shadow-lg h-14 flex items-center justify-between px-4 animate-slide-down">
        <div className="text-white text-xl sm:text-2xl font-extrabold tracking-wide">
          Student Management
        </div>
      </nav>
      <div className="max-w-md mx-auto m-30 p-6 bg-amber-100 shadow-lg rounded-md">
        <div className="w-full max-w-md p-4 space-y-2 bg-white rounded shadow">
          <h1 className="text-2xl font-semibold text-center text-indigo-700">
            Student Registration
          </h1>
          {error && (
            <div className="p-3 mb-2 text-white bg-red-500 rounded">
              {errorMessage}
            </div>
          )}
          {submitted && (
            <div className="p-3 mb-2 text-white bg-green-500 rounded">
              Registration successful! Welcome.
            </div>
          )}
          {loading && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
              <div className="flex flex-col items-center">
                <svg
                  className="animate-spin h-10 w-10 text-white mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                <p className="text-white text-lg font-semibold">Redirecting to login...</p>
              </div>
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
                maxLength={10}
                pattern="[0-9]{10}"
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
    </>
  );
}
