import { Breadcrumb, Button, FloatButton, Input, Space, Splitter, Table, Tag } from "antd"
import Column from "antd/es/table/Column";
import ColumnGroup from "antd/es/table/ColumnGroup";
import ReactGridLayout from "react-grid-layout"
import Navbar from "../../dashboard/component/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlasses, faInfo, faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const data = [
  { key: '1', firstName: 'John', lastName: 'Brown', age: 32, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer'], },
  { key: '2', firstName: 'Jim', lastName: 'Green', age: 42, address: 'London No. 1 Lake Park', tags: ['loser'], },
  { key: '4', firstName: 'Joe', lastName: 'Black', age: 32, address: 'Sydney No. 1 Lake Park', tags: ['cool', 'teacher'], },
  { key: '5', firstName: 'Joe', lastName: 'Black', age: 32, address: 'Sydney No. 1 Lake Park', tags: ['cool', 'teacher'], },
  { key: '6', firstName: 'Joe', lastName: 'Black', age: 32, address: 'Sydney No. 1 Lake Park', tags: ['cool', 'teacher'], },
  { key: '7', firstName: 'Joe', lastName: 'Black', age: 32, address: 'Sydney No. 1 Lake Park', tags: ['cool', 'teacher'], },
  { key: '8', firstName: 'Joe', lastName: 'Black', age: 32, address: 'Sydney No. 1 Lake Park', tags: ['cool', 'teacher'], },
  { key: '9', firstName: 'Joe', lastName: 'Black', age: 32, address: 'Sydney No. 1 Lake Park', tags: ['cool', 'teacher'], },
  { key: '04', firstName: 'Joe', lastName: 'Black', age: 32, address: 'Sydney No. 1 Lake Park', tags: ['cool', 'teacher'], },
  { key: '10', firstName: 'Joe', lastName: 'Black', age: 32, address: 'Sydney No. 1 Lake Park', tags: ['cool', 'teacher'], },
  { key: '11', firstName: 'Joe', lastName: 'Black', age: 32, address: 'Sydney No. 1 Lake Park', tags: ['cool', 'teacher'], },
  { key: '12', firstName: 'Joe', lastName: 'Black', age: 32, address: 'Sydney No. 1 Lake Park', tags: ['cool', 'teacher'], },
  { key: '21', firstName: 'Joe', lastName: 'Black', age: 32, address: 'Sydney No. 1 Lake Park', tags: ['cool', 'teacher'], },
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
          <Column title="First Name" dataIndex="firstName" key="firstName" />

          <Column title="Action" className="w-0" key="action" render={(_, record) => (
            <Space size="middle">
              <Button variant="solid" color="blue"><FontAwesomeIcon icon={faInfo} /></Button>
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