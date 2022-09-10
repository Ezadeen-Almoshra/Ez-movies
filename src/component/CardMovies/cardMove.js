import React, { useEffect, useState } from 'react';
import './cardmove.css';
import PaginationComp from '../Pagination/Pagination';
import { Link, useParams } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux"
import {getAllMovie} from "../redux/actions/movieAction"
const Cardmove = () => {
  // const [proallmoves, setProallmoves] = useState();
  const [isloding, setIsloding] = useState(false);
  const dispatch=useDispatch()
  const proallmoves=useSelector(state=>state.movies);
  
  useEffect(() => {
    dispatch(getAllMovie())
    // setProallmoves(allmov)
    setIsloding(true)
  }, []);
  
  return (
    <section className="portfolio section-bg">
      <div className="container" >

        <div className="row portfolio-container my-5">
          
          {isloding?(proallmoves.map((mov)=>{
          return(
           
            <div key={mov.id} className="col-lg-4 col-md-6 portfolio-item ">
            <Link to={`/move/${mov.id}`}>
            <div className="portfolio-wrap">
            <img src={`https://image.tmdb.org/t/p/w500/`+ mov.poster_path} className="img-mycard"  alt=""/>
              <div className="portfolio-info">
                <h4>{mov.title}</h4>
                <p>vote_count:{mov.vote_count}</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                  <p>popularity:{mov.popularity}</p>
                  <p>{mov.release_date}</p>
                </div>
              </div>
            </div>
            </Link>
          </div>
         
         )})):<div>No Movies</div>}
        
        </div>
        
          <PaginationComp/>
        
      </div>
    </section>
  


  )
}

export default Cardmove