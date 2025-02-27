import { useState } from "react"

function useAPI(url, options, parseFunc = i => i) {
  const [data, setData] = useState([])

  return [
    data,
    async () => {
      setData([])
      fetch(url, options)
        .then(data => data.json())
        .then(data => parseFunc(data))
        .then(data => setData(data))
    }
  ]
}

export default useAPI