import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "../../../components/ProtectedRoute";
import ProductPage from "../../product/page";
import Dashboard from "./Dashboard";

function DashboardPage({ }) {
  return (
    <ProtectedRoute route="/dashboard">
      <Routes >
        <Route index element={<Dashboard />} />
        <Route path="/product/*" element={<ProductPage />} />
      </Routes>
    </ProtectedRoute>
  )
}

export default DashboardPage