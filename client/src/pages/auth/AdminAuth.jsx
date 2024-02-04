import logo from "../../assets/logo.svg";
import Footer from "../../components/Footer";
import axios from "axios";

import { useState } from "react";

const AdminAuth = () => {
  const initialFormData = {
    emailId: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [formError, setFormError] = useState("");
  const [submitError, setSubmitError] = useState("");
  //   const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormError("");
      setSubmitError("");
      //   setIsLoading(true);
      console.log(import.meta.env.VITE_API_URL + "/admin/login");
      await axios
        .post(import.meta.env.VITE_API_URL + "/admin/login", formData)
        .then((response) => {
          // Handle successful response
          setFormData(initialFormData);
          localStorage.setItem("token", response.data.token);
          window.location.replace("/admin-dashboard");
          // setTimeout(() => {

          //   // setIsLoading(false);
          //   // login(response.data.token, "/mentor/dashboard", "mentor"); // Update context with authenticated user
          // }, 1500);
          console.log(response.data);
        })
        .catch((error) => {
          // Handle error
          // setIsLoading(false);
          console.error(error);
          setSubmitError(error.response.data.message);
        });
    } else {
      setFormError("Please fill in all the fields.");
    }
  };

  const validateForm = () => {
    return formData.emailId.trim() !== "" && formData.password.trim() !== "";
  };
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center flex-col gap-5">
        <img src={logo} alt="logo" className="aspect-auto mb-9" width={250} />
        <div className="w-80">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleAdminLogin}
          >
            <h1 className="text-2xl mb-5 font-bold">Admin Login</h1>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="emailId"
                type="email"
                placeholder="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder="******************"
                value={formData.password}
                onChange={handleInputChange}
              />
              {(formError && <p className="form-error-msg">{formError}</p>) ||
                (submitError && (
                  <p className="text-red-500 text-xs italic">{submitError}</p>
                ))}
              {/* <p class="text-red-500 text-xs italic">
                Please choose a password.
              </p> */}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2024 Votekaro. All rights reserved.
          </p>
        </div>
        <div className="fixed w-full bottom-0">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AdminAuth;
