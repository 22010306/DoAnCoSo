import { Route, Routes } from "react-router-dom"

import CustomerPage from "./Customer"
import CustomerDetail from "./CustomerDetail"

function CustomerRoute() {
  return (
    <Routes>
      <Route index element={<CustomerPage />} />
      <Route path="/:id" element={<CustomerDetail />} />
    </Routes>
  )
}

export default CustomerRoute