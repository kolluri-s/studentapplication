import { useState } from "react";
import axios from "axios";

export default function StudentRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setError(false);
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setError(false);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setError(false);
    setSubmitted(false);
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    setError(false);
    setSubmitted(false);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
    setError(false);
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "" || password.trim() === ""
    ) {
      setError(true);
      return;
    }

    try {
      const api = import.meta.env.VITE_API_URL;
      await axios.post(`${api}/register`, {
        name,
        email,
        password,
        phone : phoneNumber,
        address,
      });
      setSubmitted(true);
      setError(false);
      setName("");
      setEmail("");
      setPassword("");
      setPhoneNumber("");
      setAddress("");
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
            Please fill in all fields.
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
              value={name}
              onChange={handleName}
              className="w-full px-3 py-2 border rounded  text-black opacity-60"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmail}
              className="w-full px-3 py-2 border rounded text-black opacity-60"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePassword}
              className="w-full px-3 py-2 border rounded text-black opacity-60"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneNumber}
              className="w-full px-3 py-2 border rounded text-black opacity-60"
              placeholder="Enter your phonenumber"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Address</label>
            <input
              type="text"
              value={address}
              onChange={handleAddress}
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
      </div>
    </div>
  );
}

