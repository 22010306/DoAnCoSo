import { Breadcrumb } from "antd"
import { Link } from "react-router-dom"

import TableData from "../../../components/TableData"
import CrudButton from "../../../components/CrudButton"
import SearchField from "../../../components/SearchField"
import useAPI from "../../../hooks/useApi"
import { useState } from "react"

const columns = [
  {
    title: 'Ngày đặt', dataIndex: 'createAt', key: 'createAt',
    render: (_, item) => {
      const date = new Date(_)
      return (
        <Link to={`/dashboard/order/${item.id}`}>
          {date.toLocaleString()}
        </Link>
      )
    }
  },
  { title: 'Khách hàng', dataIndex: 'name', key: 'name', },
  { title: 'Phương thức thanh toán', dataIndex: 'payment', },
  { title: 'Số lượng sản phẩm đặt', dataIndex: 'product', },
  { title: 'Tổng đơn hàng', dataIndex: 'total', }
]

function OrderPage() {
  const [order, updateOrder] = useAPI('/api/manage-order/', null, i => i.data.map(i => ({ ...i, key: i.id })))
  const [search, setSearch] = useState("")

  return (
    <>
      <Breadcrumb className="text-2xl" items={[
        { title: <Link to="/dashboard" >Dashboard</Link> },
        { title: <p>Order</p> },
      ]} />
      <TableData
        columns={columns}
        dataSource={order.filter(i => i.name.toLowerCase().includes(search.toLowerCase()))}
        title={() =>
          <div className="flex justify-between">
            <CrudButton refreshClick={() => updateOrder()} />
            <SearchField placeholder={"Tìm kiếm theo tên khách hàng..."} findClick={function (e) { setSearch(e) }} />
          </div>
        } />
    </>
  )
}

export default OrderPage