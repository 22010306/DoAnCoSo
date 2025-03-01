import { Route, Routes } from "react-router-dom"
import { Provider } from "react-redux"
// import store from "../redux/store"

import Layout from "../component/Layout"
import CustomerInfo from "./CustomerInfo"
import MainPage from "./MainPage"
import ProductDetail from "./Product"
import OrderDetail from "./OrderDetail"
import ResourceLayout from "../component/ResourceLayout"

function GuessPage() {
  return (
    // <Provider store={store}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />

        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/" element={<ResourceLayout />}>
          <Route path="/order/*" element={<OrderDetail />} />
          <Route path="/customer-info/*" element={<CustomerInfo />} />
        </Route>
      </Route>
    </Routes>
    // </Provider>
  )
}

export default GuessPage