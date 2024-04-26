import {Routes , Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'


function App() {


  return (
    <div>
      <Routes>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
