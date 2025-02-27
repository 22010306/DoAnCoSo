import { Breadcrumb, Button, Input, Splitter, Table } from "antd"
import { Link } from "react-router-dom";

import TableData from "../../../components/TableData";
import CrudButton from "../../../components/CrudButton";
import SearchField from "../../../components/SearchField";
import { useEffect, useMemo, useState } from "react";

const columns = [
  { title: 'Mã sản phẩm', dataIndex: 'id' },
  { title: 'Tên sản phẩm', dataIndex: 'name' },
  { title: 'Giá tiền (VNĐ)', dataIndex: 'price', },
  { title: 'Mô tả', dataIndex: 'description', },
];

function ProductPage({ }) {
  const [data, setData] = useState()
  const [selectProduct, setSelectProduct] = useState()

  useEffect(function () {
    fetch('/api/product')
      .then(a => a.json())
      .then(data => setData(data.data.map((i, j) => ({ ...i, key: j }))))
  }, [])


  const tableConfiguration = {
    type: 'radio',
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectProduct(selectedRows[0])
    },
  }

  return (
    <>
      <Breadcrumb className="text-2xl" items={[
        { title: <Link to="/dashboard" >Dashboard</Link> },
        { title: <p>Product</p> },
      ]} />

      <TableData columns={columns} dataSource={data} tableConfiguration={tableConfiguration}
        title={() =>
          <div className="flex justify-between">
            <CrudButton
              createHref="/dashboard/product/create"
              updateHref={`/dashboard/product/update/${selectProduct?.id}`}
            />
            <SearchField />
          </div>
        } />
    </>

  )
}

export default ProductPage