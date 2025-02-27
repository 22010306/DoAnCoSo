import { Outlet, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ReadCustomer from "../../customer/page";

function AuthPage() {

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="customer" element={<ReadCustomer />} />
    </Routes>
  )
}

export default AuthPage