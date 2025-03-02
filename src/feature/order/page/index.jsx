import { Route, Routes } from "react-router-dom";

import OrderPage from "./OrderPage";
import OrderDetail from "./OrderDetail";

function OrderRoute() {
  return (
    <Routes>
      <Route index element={<OrderPage />} />
      <Route path="/:id" element={<OrderDetail />} />
    </Routes>
  )
}

export default OrderRoute