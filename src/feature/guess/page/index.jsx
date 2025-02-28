import { Route, Routes } from "react-router-dom"
import MainPage from "./MainPage"
import ProductDetail from "./Product"
import OrderDetail from "./OrderDetail"
import CustomerDetail from "./CustomerInfor"
import Layout from "../component/Layout"
import { Provider } from "react-redux"
import store from "../redux/store"

function GuessPage() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/order/*" element={<OrderDetail />} />
          <Route path="/customer-info/*" element={<CustomerDetail />} />
        </Route>
      </Routes>
    </Provider>
  )
}

export default GuessPage