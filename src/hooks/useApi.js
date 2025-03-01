import { useEffect, useState } from "react"

function defaultFunc(i) { return i }

function useAPI(url, options, parseFunc = defaultFunc) {
  const [data, setData] = useState([])

  async function update() {
    setData([])
    const result = await fetch(url, options)
      .then(data => data.json())

    setData(parseFunc(result))
  }

  useEffect(function () {
    update()
  }, [])

  return [data, update]
}

export default useAPI