import { Link } from "react-router-dom"

function DashboardService({ key, to, children, className, ...props }) {
  return (
    <Link to={to} key={key} className={[className, "border-4 border-white shadow rounded cursor-default flex text-center justify-center gap-2 flex-col"].join(' ')} {...props}>
      {children}
    </Link>
  )
}


export default DashboardService