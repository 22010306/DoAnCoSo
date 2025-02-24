import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Provider, useSelector } from "react-redux"

import store from "./redux/store"
import AuthPage from "../auth/page"
import GuessPage from "../guess/page"
import DashboardPage from "../dashboard/page"

function App() {
  fetch('/api')
    .then(a => a.text())
    .then(console.log)

  return (
    <BrowserRouter>
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