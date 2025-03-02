import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./Navbar";
import authAdminSlice, { authAdmin, getAdminToken } from "../redux/adminSlice";

function DashboardLayout() {
  const dispatch = useDispatch()
  const auth = useSelector(getAdminToken)


  useEffect(function () {
    dispatch(authAdminSlice.actions.authorize(localStorage.getItem('admin-token')))
    if (!localStorage.getItem('admin-token')) document.location.replace('/auth/login')

  }, [auth])

  return (
    <div className="w-screen h-screen overflow-hidden bg-gray-100 flex flex-col">
      <Navbar />

      <Outlet />
    </div >
  )
}

export default DashboardLayout