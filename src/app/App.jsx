import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Provider, useSelector } from "react-redux"

import store from "./redux/store"
import AuthPage from "../auth/page/Auth"
import GuessPage from "../guess/page/GuessPage"

function App() {
  fetch('api')
    .then(a => a.text())
    .then(console.log)
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          {/* Authenticate */}
          <Route path="auth/*" element={<AuthPage />} />

          {/* Admin */}
          <Route path="dashboard/*">
            <Route index element={<h1>test</h1>} />
            <Route path="hello" element={<h1>dd</h1>} />
          </Route>

          {/* User */}
          <Route path="/*" element={<GuessPage />} />
        </Routes>
      </Provider>
    </BrowserRouter >
  )
}

export default App