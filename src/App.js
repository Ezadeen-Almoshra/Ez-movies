import axios from 'axios';
import { useState ,useEffect,} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cardmove from "./component/CardMovies/cardMove";
import Navbar from "./component/NavBar/navbar"
import Movedetailes from './component/moveDetailes/movedetailes'

import './App.css';
 const App = () => {
 
    return (
      <div className=''>
    
        <Navbar />
          <BrowserRouter>
          <Routes>
           <Route index element={<Cardmove/>}/> 
           <Route path='/move/:id' element={<Movedetailes/>}/>
           <Route path='*' element={<Cardmove/>}/>
          </Routes>
        </BrowserRouter>
      </div>
     
  )
}



  // This Code To Resrsh Console With Every Reload
//   if (module.hot) {
//     module.hot.accept() // already had this init code 
//     module.hot.addStatusHandler(status => {
//         if (status === 'prepare') console.clear()
//     })
// }
  
  export default App ;
  