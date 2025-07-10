import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Comp from './Comp.jsx'
import Home from './Home.jsx'
import Team from './Team.jsx'
import NotFound from './NotFound.jsx'
import Swip from './Swip.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Comp />
      <Swip/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/team' element={<Team />}></Route>
        {/* <Route path='/home' element={<Home />}></Route> */}
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
) 
