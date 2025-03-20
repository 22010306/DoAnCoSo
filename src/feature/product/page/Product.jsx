import { Breadcrumb, message } from "antd";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import CrudButton from "../../../components/CrudButton";
import SearchField from "../../../components/SearchField";
import TableData from "../../../components/TableData";
import useAPI from "../../../hooks/useApi";

const columns = [
  { title: 'Mã sản phẩm', dataIndex: 'id' },
  { title: 'Tên sản phẩm', dataIndex: 'name' },
  { title: 'Giá tiền (VNĐ)', dataIndex: 'price', },
  { title: 'Mô tả', dataIndex: 'description', },
];

function ProductPage({ }) {
  const [data, updateData] = useAPI('/api/product', {}, i => i?.data)
  const [selectProduct, setSelectProduct] = useState([])
  const [search, setSearch] = useState("")
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(function () {
    updateData()
  }, [])

  const tableConfiguration = {
    type: 'radio',
    selectedRowKeys: selectProduct,
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectProduct(selectedRowKeys)
    },
  }

  async function onDeleteProduct() {
    const result = await fetch('/api/product', {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: data[selectProduct[0]]?.id })
    }).then(a => a.json())

    if (!result.success) return messageApi.open({
      type: 'error',
      content: "Xóa sản phẩm thất bại."
    })
    messageApi.open({
      type: 'success',
      content: "Xóa sản phẩm thành công."
    })
    updateData()
    setSelectProduct([])
  }

  return (
    <>
      {contextHolder}
      <Breadcrumb className="text-2xl" items={[
        { title: <Link to="/dashboard" >Dashboard</Link> },
        { title: <p>Product</p> },
      ]} />

      <TableData
        columns={columns}
        dataSource={data?.filter(i => i.name.includes(search)).map((i, j) => ({ ...i, key: j }))}
        rowSelection={tableConfiguration}
        title={() =>
          <div className="flex justify-between">
            <CrudButton
              createHref="/dashboard/product/create"
              updateHref={'/dashboard/product' + (selectProduct.length > 0 ? `/update/${data[selectProduct[0]].id}` : '/')}
              deleteClick={onDeleteProduct}
              refreshClick={() => {
                setSelectProduct([])
                updateData()
              }}
            />
            <SearchField findClick={function (e) { setSearch(e) }} />
          </div>
        } />
    </>

  )
}

export default ProductPage