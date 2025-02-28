import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductList from "../component/ProductList"
import { Breadcrumb, Button, Input, InputNumber } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

function ProductDetail() {
  const param = useParams()
  const [sanPham, setSanPham] = useState()

  useEffect(function () {
    fetch(`/api/product/${param.id}`)
      .then(data => data.json())
      .then(({ data }) => setSanPham(data[0]))
  }, [])

  console.log(sanPham)

  function onSubmit(e) {
    e.preventDefault()
  }

  return (
    <div className="w-full px-10 xl:px-60 2xl:px-70 py-10 flex flex-col gap-5" >
      <Breadcrumb items={[
        { title: <a href="/">Trang chủ</a>, },
        { title: "Sản phẩm", },
        { title: param.id, },
      ]} />
      <div className="grid grid-cols-[auto_1fr] gap-10 p-5 shadow-lg bg-gray-50 rounded-xl border-white border-2">
        <img className="rounded-xl border-red-600 border-2 w-100 h-auto" src={sanPham?.image} />
        <div className="">
          <p className="mb-5 font-bold text-3xl">{sanPham?.name}</p>
          <div className="flex gap-2 items-end mb-5">
            <p className="">Giá:</p>
            <p className="text-red-500 text-2xl font-bold">{sanPham?.price}VND</p>
          </div>
          <p className="mb-5">{sanPham?.description}</p>
          <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <Input size="large" style={{ width: '300px' }} min={0} max={10} type="number" addonBefore="Số lượng" name="quantity" />
            <Button size="large" className="w-min" htmlType="submit" variant="solid" color="red">Thêm vào giỏ <FontAwesomeIcon icon={faCartShopping} /></Button>
          </form>
        </div>
      </div>

      <ProductList />
    </div>
  )
}

export default ProductDetail