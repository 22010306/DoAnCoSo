import { Outlet, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function AuthPage() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  )
}

export default AuthPage