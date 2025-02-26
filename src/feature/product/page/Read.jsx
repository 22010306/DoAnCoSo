import { Breadcrumb, Button, FloatButton, Input, Space, Splitter, Table, Tag } from "antd"
import Column from "antd/es/table/Column";
import ColumnGroup from "antd/es/table/ColumnGroup";
import ReactGridLayout from "react-grid-layout"
import Navbar from "../../dashboard/component/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlasses, faInfo, faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const data = [
  {}
];

function ReadProduct() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar />
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
        <Table bordered dataSource={data} size="small" pagination={{ pageSize: 10 }}
          footer={() => <Button variant="solid" color="blue"><FontAwesomeIcon icon={faPlus} /></Button>}>
          <Column title="Tên sản phẩm" dataIndex="name" key="name" />
          <Column title="Giá" dataIndex="price" key="price" />
          <Column title="Mô tả" dataIndex="description" key="description" />
          <Column className="w-0" key="action" render={(_, record) => (
            <Space size="middle">
              <Button variant="solid" color="blue"><FontAwesomeIcon icon={faPen} /></Button>
              <Button variant="solid" color="red"><FontAwesomeIcon icon={faTrash} /></Button>
            </Space>
          )}
          />
        </Table>
      </div>
    </div>
  )
}

export default ReadProduct