import { Button, Input, message, Select } from "antd"
import useAPI from "../../../hooks/useApi"
import useCustomerAuth from "../../../hooks/useCustomerAuth"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getAuth } from "../redux/authSlice"


function CustomerForm({ }) {
  const auth = useSelector(getAuth)
  const [customer, setCustomer] = useState({})

  function onChange(e) {
    const elem = e.target
    setCustomer(item => ({ ...item, [elem.name]: e.value }))
  }

  useEffect(function () {
    if (!auth) return

    fetch('/api/customer', { method: "GET", headers: { Authorization: 'Bearer ' + auth, } })
      .then(data => data.json())
      .then(data => setCustomer(data.data[0]))
  }, [auth])

  return (
    <>
      <div className="grid items-center grid-cols-[250px_1fr] gap-2 ">
        <label className="font-bold" htmlFor="name">Họ và tên</label>
        <Input name="name" onChange={onChange} required value={customer.name} />
      </div>
      <div className="grid items-center grid-cols-[250px_1fr] gap-2 ">
        <label className="font-bold" htmlFor="name">Email</label>
        <Input name="mail" onChange={onChange} required value={customer.mail} />
      </div>
      <div className="grid items-center grid-cols-[250px_1fr] gap-2 ">
        <label className="font-bold" htmlFor="name">Điện thoại</label>
        <Input name="phone" onChange={onChange} required value={customer.phone} />
      </div>
      <div className="grid items-center grid-cols-[250px_1fr] gap-2 ">
        <label className="font-bold" htmlFor="name">Địa chỉ</label>
        <Input name="address" onChange={onChange} required value={customer.address} />
      </div>
    </>
  )
}

function CustomerInfo() {
  const [messageApi, contextHolder] = message.useMessage();
  const [paymentType,] = useAPI(
    'api/order/payment-type',
    null,
    i => i.data.map(item => ({ value: item.id, label: <span>{item.displayName}</span> })))
  const auth = useSelector(getAuth)
  const [choice, setChoice] = useState(1)

  async function onSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))

    fetch('/api/customer', {
      method: "PUT",
      headers: {
        Authorization: 'Bearer ' + auth,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(a => a.json())
      .then(console.log)

    const result = await fetch('/api/order', {
      method: "POST",
      headers: {
        Authorization: 'Bearer ' + auth,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ paymentType: choice })
    }).then(data => data.json())

    if (!result)
      return messageApi.open({ type: 'error', content: 'Gặp lỗi khi thiết lập đơn đặt hàng của bạn', });

    messageApi.open({ type: 'success', content: 'Đặt hàng thành công!!!', });
    setTimeout(function () { document.location.replace('/') }, 1000)
  }

  return (
    <div>
      {contextHolder}
      <div className="shadow border-1 rounded border-gray-300 ">
        <div className="border-b-1 bg-gray-50  p-2 text-xl font-bold border-gray-300 ">
          Thông tin khách hàng
        </div>

        <form className="mx-10 my-5 text-nowrap flex flex-col gap-3" onSubmit={onSubmit}>
          <CustomerForm />
          <div className="grid items-center grid-cols-[250px_1fr] gap-2 ">
            <label className="font-bold" htmlFor="name">Phương thức thanh toán</label>
            <Select value={choice} className="w-60" name="paymentType" defaultValue={1} options={paymentType} onChange={function (e) { setChoice(e) }} />
          </div>
          <Button size="large" htmlType="submit" variant="solid" color="orange" className="p-10 mx-auto">Đặt mua hàng</Button>
        </form>
      </div>
    </div>
  )
}

export default CustomerInfo