import { Breadcrumb, Descriptions, List } from "antd"
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

function OrderDetail() {
  const param = useParams()
  const [customer, setCustomer] = useState([])

  useEffect(function () {
    fetch(`/api/manage-order/info/${param.id}`)
      .then(data => data.json())
      .then(function (data) {
        console.log(data)
        const x = Object.entries(data.data[0])
          .map(([key, value], i) => ({
            label: <p className="font-bold">{cols[key]}</p>,
            children: value
          }))
        setCustomer(x)
      })
  }, [])
  return (
    <>
      <Breadcrumb className="text-2xl" items={[
        { title: <Link to="/dashboard" >Dashboard</Link> },
        { title: <Link to="/dashboard/order" >Order</Link> },
        { title: <p>{param.id}</p> },
      ]} />
      <Descriptions layout="vertical" bordered title="Thông tin đơn hàng" items={customer} />
      <List header={<p className="text-lg font-bold">Danh sách sản phẩm</p>} />
    </>
  )
}

export default OrderDetail