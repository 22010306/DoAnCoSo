import { Button, Input } from "antd"

function MainPage() {
  return (
    <div className="w-screen h-screen p-0 m-0 overflow-hidden flex flex-col">
      <div className="max-h-1/1 overflow-auto relative">
        {/* static */}


        {/* Navbar */}
        <div className="h-23 flex">
          <img src="/imgs/png/logoAge.png" />
          <div className="border border-red-500 m-6 grid grid-cols-[auto_1fr]">
            <input className="outline-none px-4 w-80" />
            <button className=" px-2 bg-red-500 text-white">Tìm kiếm</button>
          </div>
          <div className="relative bg-red-500">
            <button className="flex gap-2">

            </button>
          </div>
        </div>

        {/* Title bar */}
        <div className="mt-2 bg-amber-600 h-15"></div>

        {/* Banner */}
        <div className="mt-6 bg-amber-600 h-97"></div>

        {/* Content */}
        <div className="mt-6 bg-amber-600 h-20"></div>

        {/* Footer */}
        <div className="mt-6 bg-amber-600 h-93"></div>
      </div>
    </div>
  )
}

export default MainPage