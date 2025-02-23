import { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router"
import Upload from "../uploadFile/Upload"
import MainPage from "../guess/page/MainPage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User */}
        <Route path="/">
          <Route index element={<MainPage />} />
        </Route>

        {/* Admin */}
        <Route path="/dashboard">
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App