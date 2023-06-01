import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserProvider } from "./contexts/UserContext"
import Login from "./pages/LoginPage/Login"
import Signup from "./pages/SignupPage/Signup"
import TopBar from "./components/TopBar"
import BottomBar from "./components/BottomBar"

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <TopBar/>
        <BottomBar/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/cadastro" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
