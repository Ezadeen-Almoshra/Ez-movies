import React from 'react'
import {useDispatch} from "react-redux"
import "./navbar.css"
import avatimge from "../../assets/avatar1.png"
import {getMovieSearch,getAllMovie} from "../redux/actions/movieAction"
const Navbar = () => {
	//const [getMoveBySearch,setGetMoveBySearch] = useState();
	const dispatch=useDispatch()
	
	const getMoveBySearch=(word)=>{
		if(word===""){
			dispatch(getAllMovie())
		}
		else{dispatch(getMovieSearch(word))}
		
	}
   return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark ">
	
		<div className="container">
				<a className="navbar-brand" href="/"><span>Ez.</span>Movies</a>
					{/* <!-- Toggler/collapsibe Button --> */}
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon">  </span>
                 {/* <!-- <i className = "fas fa-bars"></i>  --> */}
					</button>
					
					{/* <!-- Navbar links --> */}
					<div className="collapse navbar-collapse" id="collapsibleNavbar">
						<ul className="navbar-nav">

							<li className="nav-item fromsereach">
								<input className="form-control sm-2 xm-1" 
								type="text" placeholder="ابحث هنا"
								onChange={(e)=>getMoveBySearch(e.target.value)}
								/>
								
							</li>


                            <li className="nav-item">
								<span className="rounded-circle w-25">
								  <img className="img-responsive rounded-circle " style={{width:"32px",height:"32px"}} src={avatimge} alt=""/>
								</span> 
						    </li>
						</ul>
					</div>
		</div>
	</nav>
  )
}

export default Navbar