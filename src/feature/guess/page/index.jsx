import { Route, Routes } from "react-router-dom"
import MainPage from "./MainPage"

function GuessPage() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
    </Routes>
  )
}

export default GuessPage