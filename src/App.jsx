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
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Account } from "./components/authentication/Account";

import {
  Home,
  Dashboard,
  Register,
  CreateBooking,
  Return,
  Bookings,
  Maintenance,
  Vehicles,
  ResetPassword,
  Calender,
} from "../src/pages";

const token = [];

const Pages = () => {
  const location = useLocation();

  return (
    <>
      {/* //$ Use the location hook to not show the sidebar on the home/login page... */}
      {location.pathname !== "/" &&
        location.pathname !== "/register" &&
        location.pathname !== "/reset_password" && <Sidebar />}

      {location.pathname !== "/" &&
        location.pathname !== "/register" &&
        location.pathname !== "/reset_password" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        {token ? <Route path="calendar" element={<Calender />} /> : null}
        {token ? <Route path="bookings" element={<Bookings />} /> : null}
        <Route path="createbooking" element={<CreateBooking />} />
        {token ? <Route path="maintenance" element={<Maintenance />} /> : null}
        {token ? <Route path="return" element={<Return />} /> : null}
        {token ? <Route path="register" element={<Register />} /> : null}
        {<Route path="reset_password" element={<ResetPassword />} />}
        <Route path="vehicles" element={<Vehicles />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Account>
        <Pages />
      </Account>
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
