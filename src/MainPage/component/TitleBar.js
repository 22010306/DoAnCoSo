

function TitleLink({ children, href }) {
  return (
    <div className="flex px-2 items-center h-full text-white hover:bg-red-700 uppercase">
      <a className="text-lg" href={href}>{children}</a>
    </div>
  )
}

function TitleBar() {
  return (
    <div className="mt-2 px-80 bg-red-500 h-15 flex justify-between items-center">
      {/* Left */}
      <div className="flex items-center h-full ">
        <TitleLink href="/">trang chủ</TitleLink>
        <TitleLink href="/">giới thiệu</TitleLink>
        <TitleLink href="/">sản phẩm</TitleLink>
        {/* <TitleLink href="/">blog làm đẹp</TitleLink> */}
        {/* <TitleLink href="/">tin hoạt động</TitleLink> */}
        {/* <TitleLink href="/">liên hệ</TitleLink> */}
      </div>

      {/* Right */}
      <div className="flex items-center h-full gap-2">
        <img src="imgs\png\call.png" />
        <p className="text-xl text-white font-bold ">Hotline: 1234.567.789</p>
      </div>
    </div>
  )
}

export default TitleBar