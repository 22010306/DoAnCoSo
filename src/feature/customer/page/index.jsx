import { Route, Routes } from "react-router-dom"
import CustomerPage from "./Customer"

function CustomerRoute() {
  return (
    <Routes>
      <Route index element={<CustomerPage />} />
      {/* <Route path="/create" element={<CreateProduct />} />
    <Route path="/update/:id" element={<UpdateProduct />} /> */}
    </Routes>
  )
}

export default CustomerRoute