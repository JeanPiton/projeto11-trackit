import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserProvider } from "./contexts/UserContext"
import Login from "./pages/LoginPage/Login"
import Signup from "./pages/SignupPage/Signup"

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/cadastro" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
