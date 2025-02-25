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
    <div className="w-screen h-screen">
      <Navbar />
      <div className="m-10 text-xl">
        <Breadcrumb items={[
          { title: <Link to="/dashboard" >Dashboard</Link> },
          { title: <p>Product</p> },
        ]} />
      </div>
      <div className="ml-10 my-5 w-100 flex gap-2">
        <Input size="large" placeholder="Tìm kiếm" />
        <Button size="large" variant="solid" color="blue">Tìm kiếm</Button>
      </div>
      <Table className="m-10" bordered dataSource={data} size="small" pagination={{ pageSize: 15 }}>

        <Column title="First Name" dataIndex="firstName" key="firstName" />

        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column title="Tags" dataIndex="tags" key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') color = 'volcano';

                return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
              })}
            </>
          )}
        />
      </Table>
    </div>
  )
}

export default ReadProduct