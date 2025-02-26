import { Avatar } from "antd"
import ReactGridLayout from "react-grid-layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faArrowTrendUp, faBox, faCube, faList, faMousePointer, faWarehouse } from "@fortawesome/free-solid-svg-icons"

import useWindowDimensions from "../../../hooks/useWindowDimensions"
import DashboardService from "../component/DashboardService"
import Navbar from "../component/Navbar"


function Dashboard() {
  const screenSize = useWindowDimensions()

  return (
    <div className="w-screen h-screen overflow-hidden bg-gray-100 flex flex-col">
      <Navbar />

      <ReactGridLayout isDraggable={false} className="overflow-y-auto overflow-x-hidden" cols={12} rowHeight={250} width={screenSize.width}>
        {/* Products */}
        <DashboardService to="/dashboard/product" className="bg-green-400 text-white" key="product" data-grid={{ x: 0, y: 0, w: 4, h: 1, minW: 2, }}>
          <FontAwesomeIcon icon={faBox} size="4x" />
          <p className="text-2xl font-bold">Sản phẩm</p>
        </DashboardService>

        {/* Customers */}
        <DashboardService to="/dashboard/customer" className="bg-blue-400 text-white" key="customer" data-grid={{ x: 4, y: 0, w: 4, h: 1, minW: 2, }}>
          <FontAwesomeIcon icon={faUser} size="4x" />
          <p className="text-2xl font-bold">Khách hàng</p>
        </DashboardService>

        {/* Statistics */}
        <DashboardService to="/statistic" className="bg-purple-400 text-white" key="statistic" data-grid={{ x: 0, y: 1, w: 4, h: 1, minW: 2, }}>
          <FontAwesomeIcon icon={faArrowTrendUp} size="4x" />
          <p className="text-2xl font-bold">Thống kê </p>
        </DashboardService>

        {/* Orders */}
        <DashboardService to="/statistic" className="bg-fuchsia-400 text-white" key="order" data-grid={{ x: 8, y: 0, w: 4, h: 1, minW: 2, }}>
          <FontAwesomeIcon icon={faList} size="4x" />
          <p className="text-2xl font-bold">Đơn hàng</p>
        </DashboardService>
      </ReactGridLayout>
    </div >
  )
}

export default Dashboard