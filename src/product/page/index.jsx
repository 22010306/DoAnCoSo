import { Route, Routes } from "react-router-dom"

import CreateProduct from "./Create"
import ReadDetailProduct from "./ReadDetail"
import ReadProduct from "./Read"

function ProductPage() {
  return (
    <Routes>
      <Route index element={<ReadProduct />} />
      <Route path="/create" element={<CreateProduct />} />
      <Route path="/read-detail/:id" element={<ReadDetailProduct />} />
    </Routes>
  )
}

export default ProductPage