import { Breadcrumb, Descriptions, List } from "antd"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const cols = {
  id: 'Mã khách hàng',
  createAt: 'Ngày tạo',
  name: "Họ và tên",
  mail: "Email",
  phone: "Số điện thoại",
  address: "Địa chỉ"
}

function CustomerDetail() {
  const param = useParams()
  const [customer, setCustomer] = useState([])

  useEffect(function () {
    fetch(`/api/customer/info/${param.id}`)
      .then(data => data.json())
      .then(function (data) {
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
        { title: <Link to="/dashboard/customer" >Customer</Link> },
        { title: <p>{param.id}</p> },
      ]} />
      <Descriptions layout="vertical" bordered title="Thông tin khách hàng" items={customer} />
      <List header={<p className="text-lg font-bold">Lịch sử đặt mua</p>} />
    </>
  )
}

export default CustomerDetail