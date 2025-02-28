import { Button, Input, Select } from "antd"

function CustomerInfo() {
  return (
    <div>
      <div className="shadow border-1 rounded border-gray-300 ">
        <div className="border-b-1 bg-gray-50  p-2 text-xl font-bold border-gray-300 ">
          Thông tin khách hàng
        </div>

        <form className="mx-10 my-5 text-nowrap flex flex-col gap-3">
          <div className="grid grid-cols-[250px_1fr] gap-2 font-bold">
            <label htmlFor="name">Họ và tên</label>
            <Input />
          </div>
          <div className="grid grid-cols-[250px_1fr] gap-2 font-bold">
            <label htmlFor="name">Email</label>
            <Input />
          </div>
          <div className="grid grid-cols-[250px_1fr] gap-2 font-bold">
            <label htmlFor="name">Điện thoại</label>
            <Input />
          </div>
          <div className="grid grid-cols-[250px_1fr] gap-2 font-bold">
            <label htmlFor="name">Địa chỉ</label>
            <Input />
          </div>
          <div className="grid grid-cols-[250px_1fr] gap-2 font-bold">
            <label htmlFor="name">Phương thức thanh toán</label>
            <Select className="w-60">
              <Select.Option value="1">Thanh toán trực tiếp</Select.Option>
              <Select.Option value="2">Chuyển khoản ngân hàng</Select.Option>
              <Select.Option value="3">Chuyển tiền qua bưu điện</Select.Option>
            </Select>
          </div>
          <Button size="large" htmlType="submit" variant="solid" color="orange" className="p-10 mx-auto">Đặt mua hàng</Button>
        </form>
      </div>
    </div>
  )
}

export default CustomerInfo