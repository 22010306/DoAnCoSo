import { Route, Routes } from "react-router-dom"


import ReadProduct from "./Read"

function ProductPage() {
  return (
    <Routes>
      <Route index element={<ReadProduct />} />
    </Routes>
  )
}

export default ProductPage