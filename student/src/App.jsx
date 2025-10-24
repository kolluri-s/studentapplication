import { BrowserRouter as Router, Routes, Route,useLocation} from 'react-router-dom';
import { useEffect} from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Register from './components/register';
import GetStudent from './components/getstudent';
import AboutPage from './components/about';
import Login from './components/login';
import './App.css';

/*function ScrollToHomeOnRefresh() {
  const location = useLocation();
  const navigate = useNavigate();
  

  useEffect(() => {
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
    }
  }, []);

  return null;
}*/

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {

  return (
    <>
    <div className="container">
      <Router>
        <Navbar />
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/getstudent" element={<GetStudent />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
