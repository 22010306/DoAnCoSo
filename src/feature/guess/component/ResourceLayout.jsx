import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function ResourceLayout() {
  return (
    <div className="grid md:mx-30 2xl:mx-79 grid-cols-[1fr_3fr] gap-4 mt-6">
      {/* left */}
      <Sidebar />

      {/* right */}
      <Outlet />
    </div>
  )
}

export default ResourceLayout