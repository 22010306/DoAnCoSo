import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

function DashboardLayout() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-gray-100 flex flex-col">
      <Navbar />

      <Outlet />
    </div >
  )
}

export default DashboardLayout