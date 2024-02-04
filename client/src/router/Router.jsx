import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Error from "../pages/error";
import AdminAuth from "../pages/auth/AdminAuth";
import Dashboard from "../pages/admin/dashboard";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/admin-auth" element={<AdminAuth />} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
