import React from 'react'
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Category from './Pages/Category'
import CategoryDetails from './Pages/CategoryDetails.jsx'
import DoctorsByDisease from './Pages/DoctorsByDisease.jsx'
import NavBar from './Components/NavBar'
import Services from './Pages/Services.jsx'
import Doctors from './Pages/Doctors.jsx'


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path ='/category' element={<Category/>}/>
        <Route path='/categoryDetails/:id' element={<CategoryDetails/>}/>
        import DoctorsByDisease from './Pages/DoctorsByDisease.jsx';

<Route path="/disease/:dId/doctors" element={<DoctorsByDisease />} />

        <Route path='/services' element={<Services/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        

        



      </Routes>


      </BrowserRouter>
      
      

      
      </div>
  )
}
