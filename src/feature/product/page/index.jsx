import CreateProduct from "./Create";
import { Routes, Route } from "react-router-dom";

import ProductPage from "./Product";
import UpdateProduct from "./Update";

function ProductRoute() {
  return (
    <Routes>
      <Route index element={<ProductPage />} />
      <Route path="/create" element={<CreateProduct />} />
      <Route path="/update/:id" element={<UpdateProduct />} />
    </Routes>
  )
}

export default ProductRoute