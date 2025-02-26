import { Route, Routes } from "react-router-dom"
import MainPage from "./MainPage"
import ProductDetail from "./Product"
import OrderDetail from "./OrderDetail"
import CustomerDetail from "./CustomerInfor"

function GuessPage() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/product/*" element={<ProductDetail />} />
      <Route path="/order/*" element={<OrderDetail />} />
      <Route path="/customer-info/*" element={<CustomerDetail />} />
    </Routes>
  )
}

export default GuessPage