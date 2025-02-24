import { Route, Routes } from "react-router-dom"
import MainPage from "./MainPage"
import { useSelector } from "react-redux"
import { getState } from "../../app/redux/selectors"

function GuessPage() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
    </Routes>
  )
}

export default GuessPage