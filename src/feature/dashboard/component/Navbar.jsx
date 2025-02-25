import { Avatar } from "antd"

function Navbar() {
  return (
    <div className="bg-blue-900 h-20 border-b-2 shadow flex justify-end">
      <div className="flex items-center m-2 p-3 gap-2 hover:bg-blue-800 rounded-2xl ">
        <p className="text-white font-bold">User</p>
        <Avatar size="large" />
      </div>
    </div>
  )
}

export default Navbar