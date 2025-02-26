import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Provider, useSelector } from "react-redux"

import store from "./redux/store"

import GuessPage from "../feature/guess/page"
import DashboardPage from "../feature/dashboard/page"
import AuthPage from "../feature/user/page"

function App() {
  fetch('/api')
    .then(a => a.text())
    .then(console.log)

  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Provider store={store}>
        <Routes>
          {/* Authenticate */}
          <Route path="auth/*" element={<AuthPage />} />

          {/* Admin */}
          <Route path="dashboard/*" element={<DashboardPage />} />

          {/* User */}
          <Route path="/*" element={<GuessPage />} />
        </Routes>
      </Provider>
    </BrowserRouter >
  )
}

export default App