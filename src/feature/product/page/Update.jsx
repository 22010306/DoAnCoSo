import { Breadcrumb, Button, Input, message, Splitter, Table, Upload } from "antd"
import { Link, Navigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import ProductForm from "../component/ProductForm";
import useAPI from "../../../hooks/useApi";
import { useDispatch } from "react-redux";
import updateSlice from "../redux/updateReducer";

function UpdateProduct({ }) {
  const dispatch = useDispatch()
  const param = useParams()
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