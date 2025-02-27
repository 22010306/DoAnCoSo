import { Outlet } from "react-router-dom"
import Banner from "../component/Banner"
import Navbar from "../component/Navbar"
import TitleBar from "../component/TitleBar"
import Footer from "../component/Footer"

function Layout() {
  return (
    <div className="w-screen h-screen p-0 m-0 overflow-hidden flex flex-col">
      <div className="max-h-1/1 overflow-auto relative">
        {/* Navbar */}
        <Navbar />

        {/* Title bar */}
        <TitleBar />

        {/* Content */}
        <Outlet />

        {/* Footer */}
        <Footer />
      </div>
    </div >
  )
}

export default Layout
