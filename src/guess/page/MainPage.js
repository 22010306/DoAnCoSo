import { Card, Carousel, List } from "antd"
import Navbar from "../component/Navbar"
import TitleBar from "../component/TitleBar"
import Banner from "../component/Banner"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faBars, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons"
import Content from "../component/Content"

function MainPage() {
  return (
    <div className="w-screen h-screen p-0 m-0 overflow-hidden flex flex-col">
      <div className="max-h-1/1 overflow-auto relative">
        {/* Navbar */}
        <Navbar />

        {/* Title bar */}
        <TitleBar />

        {/* Banner */}
        <Banner />

        {/* Content */}
        <Content />

        {/* Footer */}
        <div className="mt-6 bg-amber-600 h-93"></div>
      </div>
    </div >
  )
}

export default MainPage
