import { Breadcrumb, Descriptions, List, Table } from "antd"
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

const columns = [
  {
    title: 'Ngày tạo',
    dataIndex: 'createAt',
    render: (_, item) => {
      const date = new Date(_)
      return <p>{date.toLocaleString()}</p>
    }
  },
  { title: 'Phương thức thanh toán', dataIndex: 'payment', },
  { title: 'Tổng số tiền', dataIndex: 'total', },
]

function CustomerDetail() {
  const param = useParams()
  const [customer, setCustomer] = useState([])
  const [order, setOrder] = useState([])

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

    fetch(`/api/manage-order/info/${param.id}`)
      .then(data => data.json())
      .then(data => setOrder(data.data.map(i => ({ ...i, key: i.id }))))
  }, [])
  return (
    <>
      <Breadcrumb className="text-2xl" items={[
        { title: <Link to="/dashboard" >Dashboard</Link> },
        { title: <Link to="/dashboard/customer" >Customer</Link> },
        { title: <p>{param.id}</p> },
      ]} />
      <Descriptions layout="vertical" bordered title="Thông tin khách hàng" items={customer} />
      <Table
        className="mt-3"
        columns={columns}
        dataSource={order}
        title={() => <p className="text-lg font-bold">Lịch sử đặt mua</p>} />

    </>
  )
}

export default CustomerDetail