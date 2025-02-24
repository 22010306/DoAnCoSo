import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { authPermission } from "../redux/reducer"
import { getPermissions } from "../redux/selectors"

function ProtectedRoute({ children, loading = 'loading...', path = '/' }) {
  const dispatch = useDispatch()

  const [view, setView] = useState(1)
  const perms = useSelector(getPermissions)

  useEffect(function () {
    const paths = Object.keys(perms)
      .sort((a, b) => b.length - a.length)
    if (paths.length === 0) return

    const path = document.location.pathname
    const key = paths.find(i => path.includes(i))

    setView(perms[key] ? 2 : 3)
  }, [perms])

  useEffect(function () {
    dispatch(authPermission(''))
  }, [])

  if (view === 1) return loading
  if (view === 2) return children
  return <Navigate to={path} replace />
}

export default ProtectedRoute