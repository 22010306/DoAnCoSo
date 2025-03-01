import { Button, message, Table } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

import useCustomerAuth, { getCustomerToken } from "../../../hooks/useCustomerAuth"

function DeleteBtn({ item }) {
  async function onClick(e) {
    const result = await fetch('/api/cart/', {
      method: "DELETE",
      headers: {
        Authorization: 'Bearer ' + getCustomerToken(),
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    }).then(a => a.json())
    console.log({ result })
    window.location.reload()
  }
  return (
    <Button onClick={onClick} size="small" color="red" variant="solid" >
      <FontAwesomeIcon icon={faX} />
    </Button>
  )
}

const orderTable = [
  {
    title: 'Tên sản phẩm', dataIndex: 'name',
    render: (_, data) => <Link className="text-lg" to={`/product/${data.product}`}>{_}</Link>
  },
  { title: 'Số lượng', dataIndex: 'quantity' },
  { title: 'Đơn giá', dataIndex: 'price' },
  { title: 'Thành tiền', dataIndex: 'total' },
  { title: "Xóa", render: (_, item) => <DeleteBtn item={item} /> }
]

function OrderDetail() {
  const [data, setData] = useState([])
  const [messageApi, contextHolder] = message.useMessage();
  const auth = useCustomerAuth()

  useEffect(function () {
    if (!auth) return

    fetch('/api/cart', {
      method: "GET",
      headers: { Authorization: 'Bearer ' + auth }
    }).then(a => a.json())
      .then(data => setData(data.data.map(i => ({ ...i, key: i.id }))))
  }, [auth])

  function onOrderClick() {
    if (data.length > 0) return

    messageApi.open({
      type: 'error',
      content: 'Giỏ hàng đang trống. Hãy chọn 1 sản phẩm!',
    });
  }

  return (
    <>
      {contextHolder}
      <div className="w-full overflow-hidden flex flex-col gap-5" >
        <Table columns={orderTable} dataSource={data}
          footer={() => (
            <div className="flex justify-end">
              <div className="flex gap-5 font-bold">
                <p>Tổng cộng:</p>
                <p className="text-red-600">{data.reduce((acc, item) => acc + item.total, 0)} VNĐ</p>
              </div>
            </div>
          )} />

        <div className="flex gap-2 mx-2">
          {data.length > 0 && <Link onClick={onOrderClick} to="/customer-info">
            <Button variant="solid" color="red">Đặt hàng</Button>
          </Link>}
          {data.length === 0 && <Button onClick={onOrderClick} variant="solid" color="red">Đặt hàng</Button>}
          <Link to="/">
            <Button variant="solid" color="orange">Tiếp tục mua hàng</Button>
          </Link>
        </div>
      </div >
    </>
  )
}

export default OrderDetail