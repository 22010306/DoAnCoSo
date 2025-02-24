import { Route, Routes } from "react-router-dom"
import MainPage from "./MainPage"
import { useSelector } from "react-redux"
import { getState } from "../../app/redux/selectors"

function GuessPage() {
  const state = useSelector(getState)
  console.log(state)
  return (
    <Routes>
      <Route index element={<MainPage />} />
    </Routes>
  )
}

export default GuessPage