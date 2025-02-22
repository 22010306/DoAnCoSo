import { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router"
import Upload from "../uploadFile/Upload"
import MainPage from "../MainPage"

function App() {
  // useEffect(function () {
  //   fetch('/api')
  //     .then(res => res.text())
  //     .then(data => console.log(data));
  // }, [])


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/upload" element={<Upload />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App