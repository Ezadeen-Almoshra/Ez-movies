import { AllMOVIES, MovieApi } from '../types/moviesType'
import axios from 'axios'
import { useSelector } from 'react-redux'



export const getAllMovie = () => {
    return async (dispatch) => {
        const res = await axios.get(MovieApi)
        dispatch({ type: AllMOVIES, data: res.data.results, pages: res.data.total_pages })

    }
}

// export const getAllMovie =async (dispatch,{MovieApi}) => {
      
//         const res = await axios.get(MovieApi)
//         dispatch({ type: AllMOVIES, data: res.data.results, pages: res.data.total_pages })

    
// }

export const getMovieSearch = (word) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=32d9ff83065f674a4cc6fe2f0fcf613a&query=${word}&language=ar`)
        dispatch({ type: AllMOVIES, data: res.data.results, pages: res.data.total_pages })

    }
}


export const getPage = (page) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=32d9ff83065f674a4cc6fe2f0fcf613a&language=ar&page=${page}`)
        dispatch({ type: AllMOVIES, data: res.data.results, pages: res.data.total_pages })

    }
}



