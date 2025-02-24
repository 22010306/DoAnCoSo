import { useSelector } from "react-redux"

function Login() {

  const selector = useSelector(a => a)
  console.log(selector)
  return (
    <h1>test</h1>
  )
}

export default Login