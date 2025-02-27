import { Breadcrumb, Button, Input, message, Splitter, Table, Upload } from "antd"
import { Link, Navigate, useParams } from "react-router-dom";

import { useState } from "react";
import ProductForm from "../component/ProductForm";

function UpdateProduct({ }) {
  const param = useParams()
  console.log(param)
  const [messageApi, contextHolder] = message.useMessage();

  async function onFormSubmit(e) {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target))

    // Upload image
    const imageData = new FormData()
    imageData.append('image', formData.image)

    let result = await fetch('/api/product-image', {
      method: "POST", body: imageData,
    }).then(a => a.json())
    formData.image = result

    // upload product
    result = await fetch('/api/product', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    }).then(data => data.json())

    if (!result.success) return messageApi.open({
      type: 'error',
      content: "Tạo sản phẩm thất bại."
    })

    messageApi.open({
      type: 'success',
      content: "Tạo sản phẩm thành công."
    })

    setTimeout(function () {
      document.location.replace('/dashboard/product/')
    }, 1000)
  }

  return (
    <>
      {contextHolder}
      <Breadcrumb className="text-2xl" items={[
        { title: <Link to="/dashboard" >Dashboard</Link> },
        { title: <Link to="/dashboard/product">Product</Link> },
        { title: <p>Update</p> },
      ]} />

      <ProductForm onFormSubmit={onFormSubmit} />
    </>

  )
}

export default UpdateProduct