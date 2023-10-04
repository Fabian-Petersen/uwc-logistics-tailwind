// React Router Dom
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/features/Sidebar";
import Navbar from "./components/features/Navbar";
import Login from "./components/authentication/Login";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Home,
  Dashboard,
  Register,
  CreateBooking,
  Return,
  Bookings,
  Maintenance,
} from "../src/pages";

const token = [];

const Pages = () => {
  const location = useLocation();

  return (
    <>
      {/* //$ Use the location hook to not show the sidebar on the home/login page... */}
      {location.pathname !== "/" && <Sidebar />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        {token ? <Route path="bookings" element={<Bookings />} /> : null}
        <Route path="createbooking" element={<CreateBooking />} />
        {token ? <Route path="maintenance" element={<Maintenance />} /> : null}
        {token ? <Route path="return" element={<Return />} /> : null}
        {token ? <Route path="register" element={<Register />} /> : null}
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Pages />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        newestOnTop={true}
        closeOnClick
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
};

export default App;
