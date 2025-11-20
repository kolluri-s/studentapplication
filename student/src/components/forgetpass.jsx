import { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [oldpassword, setoldpassword] = useState('');
  const [newpassword, setnewpassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const api = import.meta.env.VITE_API_URL;
      const response = await axios.patch(`${api}/forgetpassword`, {
        email,
        oldpassword,
        newpassword,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto m-30 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Forgot Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700"
        />
        <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Old Password</label>
        <input
          type="password"
          placeholder="Enter your old password"
          value={oldpassword}
          onChange={(e) => setoldpassword(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700"
        />
        <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">New Password</label>
        <input
          type="password"
          placeholder="Enter your new password"
          value={newpassword}
          onChange={(e) => setnewpassword(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          {loading ? 'Changing...' : 'Change Password'}
        </button>
      </form>
      {message && (
        <p className="mt-4 text-center text-green-600 font-medium">{message}</p>
      )}
    </div>
  );
};

export default ForgotPassword;