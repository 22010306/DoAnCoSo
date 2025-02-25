import { useEffect, useState } from "react";
import ProtectedRoute from "../../../components/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { getPages } from "../../auth/redux/selectors";
import { authPermission } from "../../auth/redux/reducer";
import { Route, Routes } from "react-router-dom";

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