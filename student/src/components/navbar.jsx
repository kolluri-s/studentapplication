import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600/95 backdrop-blur shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <NavLink 
              to="/home" 
              className="text-white text-xl sm:text-2xl font-extrabold tracking-wide"
            >
              Student Information
            </NavLink>
            <div className="flex items-center gap-6 text-white">
              <NavLink 
                to="/home" 
                className={({ isActive }) =>
                  isActive 
                    ? "font-semibold border-b-2 border-white transition duration-200" 
                    : "hover:text-gray-200 transition duration-200"
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/getstudent"
                className={({ isActive }) =>
                  isActive 
                    ? "font-semibold border-b-2 border-white transition duration-200" 
                    : "hover:text-gray-200 transition duration-200"
                }
              >
                Get Student
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) =>
                  isActive 
                    ? "font-semibold border-b-2 border-white transition duration-200" 
                    : "hover:text-gray-200 transition duration-200"
                }
              >
                About
              </NavLink>
              <button
                onClick={handleLogout}
                className="text-white cursor-pointer hover:text-gray-200 transition duration-200 bg-transparent border-none font-normal"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-16"></div>
    </>
  );
}