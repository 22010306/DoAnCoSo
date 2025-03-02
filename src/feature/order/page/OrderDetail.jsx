import { Breadcrumb, Descriptions, List, Table } from "antd"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const cols = {
  id: 'Mã đơn hàng',
  createAt: 'Ngày tạo',
  name: "Khách hàng",
  payment: "Kiểu thanh toán",
  product: "Số lượng sản phẩm",
  total: "Tổng đơn giá"
}

const columns = [
  { title: 'Mã sản phẩm', dataIndex: 'id', },
  { title: 'Tên sản phẩm', dataIndex: 'name', },
  { title: 'Giá tiền', dataIndex: 'price', },
  { title: 'Số lượng', dataIndex: 'quantity', },
  { title: 'Tổng', dataIndex: 'total', },
]

function OrderDetail() {
  const param = useParams()
  const [customer, setCustomer] = useState([])
  const [items, setItems] = useState([])

  useEffect(function () {
    fetch(`/api/manage-order/detail/${param.id}`)
      .then(data => data.json())
      .then(function (data) {
        const x = Object.entries(data.data[0])
          .map(([key, value], i) => ({
            label: <p className="font-bold">{cols[key]}</p>,
            children: value
          }))
        setCustomer(x)
      })

    fetch(`/api/manage-order/items/${param.id}`)
      .then(data => data.json())
      .then(data => setItems(data.data.map((i, j) => ({ ...i, key: j }))))
  }, [])
  return (
    <>
      <Breadcrumb className="text-2xl" items={[
        { title: <Link to="/dashboard" >Dashboard</Link> },
        { title: <Link to="/dashboard/order" >Order</Link> },
        { title: <p>{param.id}</p> },
      ]} />
      <Descriptions layout="vertical" bordered title="Thông tin đơn hàng" items={customer} />
      <Table
        className="mt-3"
        columns={columns}
        dataSource={items}
        title={() => <p className="text-lg font-bold">Danh sách sản phẩm</p>} />

    </>
  )
}

export default OrderDetail