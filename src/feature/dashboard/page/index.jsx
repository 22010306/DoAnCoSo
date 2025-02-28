import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import Dashboard from "./Dashboard";
import DashboardLayout from "../component/Layout";

import store from "../redux/store";
import ManageLayout from "../component/ManageLayout";

import ProductPage from "../../product/page/Product";
import ProductRoute from "../../product/page";
import CustomerRoute from "../../customer/page";

function DashboardPage(props) {
  return (
    <Provider store={store}>
      <Routes >
        <Route path="/" element={<DashboardLayout key="layout" />}>
          <Route index element={<Dashboard key="dashboard" />} />

          <Route path="/" element={<ManageLayout />}>
            <Route path="/product/*" element={<ProductRoute />} />
            <Route path="/customer/*" element={<CustomerRoute />} />
            <Route path="/order/*" element={<ProductPage />} />
            <Route path="/statistic/*" element={<ProductPage />} />
            <Route path="/account/*" element={<ProductPage />} />
          </Route>
        </Route>
      </Routes>
    </Provider>
  )
}

export default DashboardPage