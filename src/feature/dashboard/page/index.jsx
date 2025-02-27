import { Route, Routes } from "react-router-dom";

import ProductPage from "../../product/page";
import Dashboard from "./Dashboard";
import DashboardLayout from "./Layout";

function DashboardPage(props) {
  return (
    <Routes >
      <Route path="/" element={<DashboardLayout key="layout" />}>

        <Route index element={<Dashboard key="dashboard" />} />

        <Route path="/product/*" element={<ProductPage key="product" />} />
      </Route>
    </Routes>
  )
}

export default DashboardPage