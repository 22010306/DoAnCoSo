import { Link } from "react-router-dom"


function TitleLink({ children, href }) {
  return (
    <div className="flex px-2 items-center h-full text-white hover:bg-red-700 uppercase">
      <Link className="text-lg" to={href}>{children}</Link>
    </div>
  )
}

function TitleBar() {
  return (
    <div className="2xl:px-80 lg:px-40 py-5 bg-red-600 h-15 flex justify-between items-center">
      {/* Left */}
      <div className="flex items-center h-full ">
        <TitleLink href="/">trang chủ</TitleLink>
        <TitleLink href="/">giới thiệu</TitleLink>
        <TitleLink href="/">sản phẩm</TitleLink>
      </div>

      {/* Right */}
      <div className="flex items-center h-full gap-2">
        <img src="imgs\png\call.png" alt="" />
        <p className="text-xl text-white font-bold ">Hotline: 1234.567.789</p>
      </div>
    </div>
  )
}

export default TitleBar