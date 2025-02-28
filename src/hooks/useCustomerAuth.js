const { useEffect, useState } = require("react");

function useCustomerAuth() {
  const [auth, setAuth] = useState()
  useEffect(function () {
    const auth = localStorage.getItem('auth-customer')
    if (auth) setAuth(auth)

    // fetch customer's account
    fetch('/api/customer/auth')
      .then(data => data.json())
      .then(data => {
        localStorage.setItem('auth-customer', data.data)
        setAuth(data.data)
      })
  }, [])

  return auth
}

export default useCustomerAuth