import { Button, Col, Form, Input, Row } from "antd"
import Password from "antd/es/input/Password"
import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { getPermissions } from "../redux/selectors"

function Login() {
  const ath = useSelector(getPermissions)
  console.log(ath)
  useEffect(function () {

  }, [])

  function onFormSubmit(e) {
    // const data = Object.fromEntries(new FormData(form.current))
    // console.log(data)
    console.log(e)
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-cyan-800">
      <Form className="border bg-cyan-400 p-20" layout="vertical" onValuesChange={onFormSubmit}>
        <Form.Item label={<p className="font-bold">Họ và tên</p>}>
          <Input />
        </Form.Item>
        <Form.Item label={<p className="font-bold">Mật khẩu</p>}>
          <Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" >Submit</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login