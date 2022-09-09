import axios from 'axios';
import { useState ,useEffect} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cardmove from "./component/CardMovies/cardMove";
import Navbar from "./component/NavBar/navbar"
import Movedetailes from './component/moveDetailes/movedetailes'
import './App.css';
 const App = () => {
 
  const [allMoves,setAllMoves] = useState();
 const [countPage, setCountPage] = useState();
const [isloding, setIsloding] = useState(false);
  const getAllMovies=async()=>{
    const res=await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=32d9ff83065f674a4cc6fe2f0fcf613a&language=ar&page=1");
    setAllMoves(res.data.results);
    setCountPage(res.data.total_pages);
    setIsloding(true)
  }
    useEffect(() => {
     getAllMovies();
   }, []);
 
  const getMoveBySearch=async(word)=>{
    if(word ===""){
      const res=await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=32d9ff83065f674a4cc6fe2f0fcf613a&language=ar");
      setAllMoves(res.data.results);
      setCountPage(res.data.total_pages)
    }else{
      const res=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=32d9ff83065f674a4cc6fe2f0fcf613a&query=${word}&language=ar`);
      setAllMoves(res.data.results);
      setCountPage(res.data.total_pages)
    }
    }

    const getMoviesInPage=async(page)=>{
      const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=32d9ff83065f674a4cc6fe2f0fcf613a&language=ar&page=${page}`);
      setAllMoves(res.data.results);
      setCountPage(res.data.total_pages)
    }
    return (
      <div className=''>
      {/* console.log(allMoves) */}
        <Navbar getMoveBySearch={getMoveBySearch}/>
          <BrowserRouter>
          <Routes>
           <Route path='/Ez-Movie' element={<Cardmove proallmoves={allMoves} getMoviesInPage={getMoviesInPage} countPage={countPage} isloding={isloding}/>}/> 
           <Route path='/move/:id' element={<Movedetailes/>}/>
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
  