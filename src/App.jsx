// React Router Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/features/Sidebar";
// import Navbar from "./components/features/Navbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Home,
  Dashboard,
  Register,
  CreateBooking,
  Return,
  Vehicles,
  Bookings,
  // SingleVehicle,
  // Users,
  Maintenance,
  // RegisterMaintenance,
  ProtectedRoute,
  // UserPage,
  /* Register, */
} from "../src/pages";

const token = [];
const App = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        {token ? <Route path="bookings" element={<Bookings />} /> : ""}
        <Route path="createbooking" element={<CreateBooking />} />
        {/* <Route path="vehicles/:vehicleId" element={<SingleVehicle />} /> */}
        {token ? <Route path="maintenance" element={<Maintenance />} /> : ""}
        {token ? <Route path="return" element={<Return />} /> : ""}
        {token ? <Route path="register" element={<Register />} /> : ""}
        {token ? (
          <Route
            path="vehicles"
            element={
              <ProtectedRoute>
                <Vehicles />
              </ProtectedRoute>
            }
          />
        ) : (
          ""
        )}
      </Routes>
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

{
  /* <Toaster
          position="top-center"
          gutter={15}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            duration: 3000,
            success: {
              duration: 1500,
            },
            error: { duration: 2000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--clr-bg-form)",
              color: "var(--clr-white)",
              textTransform: "Capitalize",
            },
          }}
        /> */
}
