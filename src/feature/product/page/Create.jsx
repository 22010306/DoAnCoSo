import { Breadcrumb, Button, Input, message, Splitter, Table, Upload } from "antd"
import { Link, Navigate } from "react-router-dom";

import { useEffect, useState } from "react";
import ProductForm from "../component/ProductForm";
import { useDispatch } from "react-redux";
import updateSlice from "../redux/updateReducer";
import { uploadImage } from "../../../utilities/other";

function CreateProduct({ }) {
  const dispatch = useDispatch()
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(function () {
    dispatch(updateSlice.actions.updateItem({}))
  }, [])

  async function onFormSubmit(e) {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target))

    // Upload image
    let result = await uploadImage('/api/product-image', formData.image)
    formData.image = result.data

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
        { title: <p>Create</p> },
      ]} />

      <ProductForm onFormSubmit={onFormSubmit} />
    </>

  )
}

export default CreateProduct