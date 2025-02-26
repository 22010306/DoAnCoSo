import { Button, Col, Form, Input, Row } from "antd"
import Password from "antd/es/input/Password"
import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { getPages } from "../redux/selectors"

function Login() {

  useEffect(function () {

  }, [])

  async function onFormSubmit(e) {

  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-cyan-800">
      <form className="flex flex-col gap-5 border-2 border-white rounded-lg bg-cyan-400 p-20" layout="vertical" onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="emailInput" className="font-bold text-xl">Email</label>
          <Input id="emailInput" name="email" />
        </div>

        <div>
          <label htmlFor="emailInput" className="font-bold text-xl">Mật khẩu</label>
          <Password id="passwordInput" name="password" />
        </div>

        <Button htmlType="submit" type="primary">Đăng nhập</Button>
      </form>
    </div >
  )
}

export default Login