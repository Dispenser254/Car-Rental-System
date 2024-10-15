import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DateReservation from "./pages/DateReservation";
import Terms from "./pages/Terms";
import Service from "./pages/Service";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/date-reservation" element={<DateReservation />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
