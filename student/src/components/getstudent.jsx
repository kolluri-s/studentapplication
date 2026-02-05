import { useState } from "react";
import axios from 'axios';

export default function GetStudent() {
  const [phone, setPhone] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, "");
    setPhone(onlyNums);
    setResult(null);
    setError("");
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!phone.trim()) {
      setError("Please enter a phone number.");
      setResult(null);
      return;
    }

    try {
      const api = import.meta.env.VITE_API_URL;
      const response = await axios.get(`${api}/getstudent/${phone}`);
      if (response.data) {
        setResult(response.data);
        setError('');
      } else {
        setResult(null);
        setError('No student found with that phone number.');
      }
      setPhone('');
    } catch (err) {
      setResult(null);
      setError('Error fetching data. Please try again.');
      console.error(err);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 rounded shadow">
        {!result && (
          <>
            <h1 className="mb-4 text-2xl font-semibold text-indigo-700 text-center">
              Find Student by Phone Number
            </h1>

            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full px-3 py-2 border rounded text-black opacity-60"
                />
              </div>

              {error && (
                <div className="p-2 text-white bg-red-500 rounded">{error}</div>
              )}
              <button
                type="submit"
                className="w-full py-2 font-bold text-white bg-indigo-600 rounded hover:bg-indigo-700"
              >
                Search
              </button>
            </form>
          </>
        )}

        {result && (
          <div className="mt-6 p-6 rounded-xl shadow-lg bg-gradient-to-r from-green-100 via-green-50 to-white border border-green-200">
            <h2 className="mb-4 text-xl font-bold text-green-700 flex items-center gap-2">
              🎓 Student Found
            </h2>
            <div className="space-y-3 text-gray-700">
              <p className="flex items-center gap-2">
                <span className="font-semibold text-indigo-700">👤 Name:</span>
                <span className="text-gray-800">{result.name}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-indigo-700">📧 Email:</span>
                <span className="text-gray-800">{result.email}</span>
              </p>
              {result.phone && (
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-indigo-700">📞 Phone:</span>
                  <span className="text-gray-800">{result.phone}</span>
                </p>
              )}
              {result.address && (
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-indigo-700">🏠 Address:</span>
                  <span className="text-gray-800">{result.address}</span>
                </p>
              )}
            </div>
            <button
              onClick={() => setResult(null)}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Search Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
