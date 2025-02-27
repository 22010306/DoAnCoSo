const { Outlet } = require("react-router-dom");

function ManageLayout() {
  return (
    <div className="flex flex-col gap-2 p-10 overscroll-y-auto">
      <Outlet />
    </div>
  )
}

export default ManageLayout