import { Breadcrumb, Button, Input, message, Splitter, Table, Upload } from "antd"
import { Link, Navigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import ProductForm from "../component/ProductForm";
import useAPI from "../../../hooks/useApi";
import { useDispatch, useSelector } from "react-redux";
import updateSlice, { uploadProductImage } from "../redux/updateReducer";
import { getProduct } from "../redux/selectors";
import { uploadImage } from "../../../utilities/other";

function UpdateProduct({ }) {
  const dispatch = useDispatch()
  const param = useParams()
  const product = useSelector(getProduct)
  const [messageApi, contextHolder] = message.useMessage();

  console.log(param)

  useEffect(function () {
    fetch(`/api/product/${param.id}`)
      .then(data => data.json())
      .then(data => {
        dispatch(updateSlice.actions.updateItem(data.data[0]))
      })
  }, [])

  async function onFormSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target))

    if (data.image.size == 0) data.image = product.image
    else {
      const result = await uploadImage('/api/product-image', data.image)
      data.image = result.data
    }
    console.log(product.id)
    const result = await fetch('/api/product', {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, id: product.id })
    }).then(a => a.json())
    console.log(result)
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