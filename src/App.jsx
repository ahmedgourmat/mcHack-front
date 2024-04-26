import { Routes, Route } from "react-router-dom"
import Signup from "./Pages/Signup"
import Home from "./Pages/Home"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
