const { useEffect, useState } = require("react");

function useCustomerAuth() {
  const [auth, setAuth] = useState()

  useEffect(function () {
    const auth = getCustomerToken()

    if (auth) return setAuth(auth)

    // fetch customer's account
    fetch('/api/customer/auth')
      .then(data => data.json())
      .then(data => {
        console.log('ddd', { data })
        localStorage.setItem('auth-customer', data.data)
        setAuth(data.data)
      })
  }, [])

  return auth
}

export function getCustomerToken() {
  return localStorage.getItem('auth-customer')
}

export default useCustomerAuth