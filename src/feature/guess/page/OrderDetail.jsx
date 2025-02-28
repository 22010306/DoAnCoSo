import { Button, Table } from "antd"
import ProductList from "../component/ProductList"
import Sidebar from "../component/Sidebar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const orderTable = [
  { title: 'Tên sản phẩm', dataIndex: 'product' },
  { title: 'Số lượng', dataIndex: 'quantity' },
  { title: 'Đơn giá', dataIndex: 'quantity' },
  { title: 'Thành tiền', dataIndex: 'quantity' },
  {
    title: "Xóa", render: () => (
      <Button><FontAwesomeIcon icon={faX} /></Button>
    )
  }
]

function OrderList() {
  return (
    <Table columns={orderTable}
      footer={() => (
        <div className="flex justify-between">
          <Button color="blue" variant="solid">Cập nhật</Button>
          <div className="flex gap-5 font-bold">
            <p>Tổng cộng:</p>
            <p className="text-red-600">100000 VNĐ</p>
          </div>
        </div>
      )} />
  )
}

function OrderDetail() {
  return (
    <div className="w-full overflow-hidden flex flex-col gap-5" >
      <OrderList />

      <div className="flex gap-2">
        <Link to="/customer-info">
          <Button variant="solid" color="red">Đặt hàng</Button>
        </Link>
        <Link to="/">
          <Button variant="solid" color="orange">Tiếp tục mua hàng</Button>
        </Link>
      </div>
    </div >
  )
}

export default OrderDetail