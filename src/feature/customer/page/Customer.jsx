import { Breadcrumb } from "antd"
import { Link } from "react-router-dom"

import TableData from "../../../components/TableData"
import CrudButton from "../../../components/CrudButton"
import SearchField from "../../../components/SearchField"
import useAPI from "../../../hooks/useApi"
import { useState } from "react"

const columns = [
  {
    title: 'Họ và tên', dataIndex: 'name', key: 'name',
    render: (_, item) => <Link to={`/dashboard/customer/${item.id}`}>{_}</Link>
  },
  { title: 'mail', dataIndex: 'mail', key: 'age', },
  { title: 'Số điện thoại', dataIndex: 'phone', },
  { title: 'Địa chỉ', dataIndex: 'address', },
  { title: 'Đơn đã đặt', dataIndex: 'orders', }
]

function CustomerPage() {
  const [customer, updateCustomer] = useAPI('/api/customer/info', null, i => i.data.map(i => ({ ...i, key: i.id })))
  const [search, setSearch] = useState("")

  console.log(search)

  return (
    <>
      <Breadcrumb className="text-2xl" items={[
        { title: <Link to="/dashboard" >Dashboard</Link> },
        { title: <p>Customer</p> },
      ]} />
      <TableData
        columns={columns}
        dataSource={customer.filter(i => i.name.toLowerCase().includes(search.toLowerCase()))}
        title={() =>
          <div className="flex justify-between">
            <CrudButton
              refreshClick={() => {
                updateCustomer()
                console.log('test')
              }}
            />
            <SearchField placeholder="Tìm kiếm theo tên..."
              findClick={function (e) {
                setSearch(e)
              }} />
          </div>
        } />
    </>
  )
}

export default CustomerPage