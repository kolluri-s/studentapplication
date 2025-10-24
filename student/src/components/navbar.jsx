import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <>
        <nav className="fixed top-0 inset-x-0 z-50 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600/95 backdrop-blur shadow-lg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="h-16 flex items-center justify-between">
              <Link to="/" className="text-white text-xl sm:text-2xl font-extrabold tracking-wide">
                Student Information
              </Link>
              <div className="flex items-center gap-6 text-white">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/getstudent">Get Student</Link>
                <Link to="/about">About</Link>
              </div>
            </div>
          </div>
        </nav>
    </>
  );
}
