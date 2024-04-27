import { Routes, Route } from "react-router-dom"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import Schedules from "./Pages/Schedules"
import MyDocs from "./Pages/MyDocs"
import Client from "./Pages/Client"
import Settings from "./Pages/Settings"
import Session from "./Pages/Session"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Schedules" element={<Schedules />} />
        <Route path="/MyDocs" element={<MyDocs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Client" element={<Client />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Session" element={<Session />} />
      </Routes>
    </div>
  )
}

export default App
