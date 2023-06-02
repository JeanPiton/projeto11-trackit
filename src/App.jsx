import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserProvider } from "./contexts/UserContext"
import Login from "./pages/LoginPage/Login"
import Signup from "./pages/SignupPage/Signup"
import TopBar from "./components/TopBar"
import BottomBar from "./components/BottomBar"
import Today from "./pages/TodayPage/Today"
import Habits from "./pages/HabitsPage/Habits"

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <TopBar/>
        <BottomBar/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/cadastro" element={<Signup/>}/>
          <Route path="/hoje" element={<Today/>}/>
          <Route path="/habitos" element={<Habits/>}/>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
