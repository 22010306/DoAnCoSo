import { Breadcrumb, Button, FloatButton, Input, Space, Splitter, Table, Tag } from "antd"
import { Link } from "react-router-dom";

import Navbar from "../../dashboard/component/Navbar";

const data = [

];


const columns = [
  { title: 'Tên sản phẩm', dataIndex: 'name', key: 'name', render: (text) => <a>{text}</a>, },
  { title: 'Giá tiền', dataIndex: 'price', key: 'price', },
  { title: 'Mô tả', dataIndex: 'description', key: 'description', },
  {
    title: 'Action', key: 'action',
    render: (_, record) => (
      <Space className="w-0" size="middle">

      </Space>
    ),
  },
];

function ProductTable() {
  return <Table bordered dataSource={data} columns={columns} size="small" pagination={{ pageSize: 10 }} />

}

function ReadProduct() {
  return (
    <div className="flex flex-col gap-2 p-10">
      <div className="text-xl">
        <Breadcrumb items={[
          { title: <Link to="/dashboard" >Dashboard</Link> },
          { title: <p>Product</p> },
        ]} />
      </div>
      <div className="my-5 w-100 flex gap-2">
        <Input size="large" placeholder="Tìm kiếm" />
        <Button size="large" variant="solid" color="blue">Tìm kiếm</Button>
      </div>
      <ProductTable />
    </div>
  )
}

export default ReadProduct