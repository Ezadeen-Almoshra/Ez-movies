import Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams ,Link} from 'react-router-dom';
import "./movedetailes.css"
const Movedetailes = () => {
    const param = useParams();
    const [movie, setMovie] = useState([])
     
    //get  movie by details 
    const getMovieDetails = async () => {
        const res = await Axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=32d9ff83065f674a4cc6fe2f0fcf613a&language=ar`)
        setMovie(res.data)
        console.log(res.data.title)
    }
    useEffect(() => {
        getMovieDetails();
    }, [])
  return (
    <div className='container'>
    <div className='box'>
        <div className='row'>
               <div className='col-sm-6'>
               <div className="justify-content-center text-start mx-3 ">
                            <p className="card-text-details border-bottom">
                            Name of film:{movie.title}
                            </p>
                            <p className="card-text-details border-bottom">
                              Date Of film:{movie.release_date}
                            </p>
                            <p className="card-text-details border-bottom">
                             Number Of Vote:{ movie.vote_count}
                            </p>
                            <p className="card-text-details border-bottom">
                            Vote:{movie.vote_average}
                            </p>
                            <p className="card-text-details border-bottom">
                              overview:<br/> {movie.overview}
                            </p>
                           
                        </div>
               </div>
               <div className='col text-end'>
               <img src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}style={{width:"200px",height:"200px"}} alt='photoerr'/>
            
               </div>
         </div>
        </div>
        <div className='row justify-content-center text-center  mx-auto my-3'>
            <div className='col'>
               <a href={movie.homepage} target="blank" >
                 <button className='btn btn-success'>Open Film</button>
                </a>
            </div>
            <div className='col'>
            <Link to="/">
                <button className='btn btn-success'>Go To Home</button>
           </Link>
            </div>
        </div>

     
    </div>
  )
}

export default Movedetailes