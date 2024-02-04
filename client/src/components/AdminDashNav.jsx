import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { ConnectWallet } from "@thirdweb-dev/react";
const AdminDashNav = () => {
  return (
    <>
      <div className="w-full px-6 py-4 bg-orange-500">
        <div className="max-w-[1200px] mx-auto flex justify-between">
          <span className="my-auto">
            <img src={logo} alt="" width={150} className="aspect-auto" />
          </span>
          <div>
            <div className="flex gap-6 items-center">
              <Link to={"/admin-dashboard"}>Dashboard</Link>
              <Link to={"/candidates"}>Candidates</Link>
              <button className="rounded-md bg-black px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                Logout
              </button>
              <ConnectWallet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashNav;
