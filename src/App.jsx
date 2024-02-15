import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import View from './pages/View'

function App() {

  return (
    <>
   
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/view' element={<View/>}/>
      <Route path='/*' element={<Navigate to={'/'}/>}/>

     </Routes>
    </>
  )
}

export default App
