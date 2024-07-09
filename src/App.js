// App.js
import { useEffect } from "react";
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Login from "./screens/login/Login";
import SignupPage from "./screens/signup/SignUp";
import HomePage from "./screens/admin/home/Home";
import AIStyles from "./screens/customer/aiStyles/AIStyles";
import BarbersProfile from "./screens/customer/Barber'sProfile/BarbersProfile";
import Services from "./screens/customer/Services/Services";
import HairStyles from "./screens/customer/hairStyles/HairStyles";
import BarberPage from "./screens/admin/barber/Barber";
import Barbers from "./screens/Barber/Barbers";
import Dashboard from "./screens/Barber/Dashboard/Dashboard";
import BarberHeader from "./components/headers/BarberHeader.js/BarberHeader";
import Profile from "./screens/Barber/Profile/Profile";
import Appointments from "./screens/Barber/Appointments/Appointments";
import Contact from "./screens/Barber/Contact/Contact";
import Reviews from "./screens/customer/Reviews/Reviews";
import CustomerHeader from "./components/headers/customer-header/CustomerHeader";
import ProtectedRoute from "./components/ProtectRoute";
import Unauthorized from "./components/UnauthorizedPage";
import ErrorPage from "./screens/Error/Error"; // Import the ErrorPage component
import Appointment from "./screens/customer/appointnment/Appointment";
import CustomerHomePage from "./screens/customer/home/Home";
import { theme } from "./AppStyle";

const RedirectToRoleHome = ({ role }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (role === "admin") {
      navigate("/home");
    } else if (role === "barber") {
      navigate("/barbers/dashboard");
    } else if (role === "customer") {
      navigate("/customer/home");
    }
  }, [role, navigate]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress />
    </div>
  );
};

function App() {
  const userToken = localStorage.getItem("userToken");
  const userTokenObj = userToken ? JSON.parse(userToken) : null;
  const role = userTokenObj ? userTokenObj.role : null;

  return (
    <Routes>
      {!role ? (
        <>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />
        </>
      ) : (
        <>
          {/* Redirect root to home page based on role */}
          <Route path="/" element={<RedirectToRoleHome role={role} />} />
        </>
      )}
      {/* Admin routes */}
      <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/barber" element={<BarberPage />} />
        <Route path="/barbers/home" element={<Barbers />} />
        <Route path="/barbers/profile" element={<BarbersProfile />} />
        <Route path="/reviews" element={<Reviews />} />
      </Route>

      {/* Customer routes */}
      <Route element={<ProtectedRoute allowedRoles={["admin", "customer"]} />}>
        <Route path="/customer/home" element={<CustomerHomePage />} />
        <Route path="/customer/aIStyles" element={<AIStyles />} />
        <Route path="/customer/services" element={<Services />} />
        <Route path="/barber/customer/profile" element={<BarbersProfile />} />
        <Route path="/customer/hair-style" element={<HairStyles />} />
        <Route path="/customer/reviews" element={<Reviews />} />
        <Route path="/customer/contact" element={<Contact />} />
        <Route path="/customer/appointments" element={<Appointment />} />
      </Route>

      {/* Barber routes */}
      <Route element={<ProtectedRoute allowedRoles={["admin", "barber"]} />}>
        <Route path="/barbers/dashboard" element={<Barbers />} />
        {/* <Route path="/barbers/dashboard" element={<Dashboard />} /> */}
        <Route path="/barbers/profiles" element={<Profile />} />
        <Route path="/barbers/appointments" element={<Appointments />} />
      </Route>

      {/* Unauthorized route */}
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Fallback route */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
