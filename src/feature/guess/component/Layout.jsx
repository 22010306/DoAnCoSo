import { Outlet } from "react-router-dom"
import Banner from "./Banner"
import Navbar from "./Navbar"
import TitleBar from "./TitleBar"
import Footer from "./Footer"

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
