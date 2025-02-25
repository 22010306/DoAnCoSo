import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { authPermission } from "../auth/redux/reducer"
import { getPages } from "../auth/redux/selectors"

function ProtectedRoute({ route, children, loading = 'loading...', path = '/' }) {
  const dispatch = useDispatch()

  const [view, setView] = useState(1)

  const pages = useSelector(getPages)
  useEffect(function () {
    setView(pages[route] === false ? 3 : 2)
  }, [pages])

  useEffect(function () {
    if (pages[route] == null)
      dispatch(authPermission({
        token: `Bearer ${localStorage.getItem('token')}`,
        path: route
      }))
  }, [])
  // console.log(view)
  if (view === 1) return loading
  if (view === 3) return <Navigate to={path} replace />
  return children
}

export default ProtectedRoute