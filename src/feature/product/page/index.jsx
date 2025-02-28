import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import CreateProduct from "./Create";
import ProductPage from "./Product";
import UpdateProduct from "./Update";

import store from "../redux/store";

function ProductRoute() {
  return (
    <Provider store={store}>
      <Routes>
        <Route index element={<ProductPage />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
      </Routes>
    </Provider>
  )
}

export default ProductRoute