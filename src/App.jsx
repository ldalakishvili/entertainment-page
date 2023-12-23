import './reset.css'
import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import SignIn from './assets/Components/SignIn'
import SignUp from './assets/Components/SignUp'
import HomePage from './assets/Components/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/:category' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
