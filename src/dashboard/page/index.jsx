import { useEffect, useState } from "react";
import ProtectedRoute from "../../auth/component/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { getPages } from "../../auth/redux/selectors";
import { authPermission } from "../../auth/redux/reducer";

function DashboardPage({ }) {
  return (
    <ProtectedRoute>
      <h1>tedddst</h1>
    </ProtectedRoute>
  )
}

export default DashboardPage