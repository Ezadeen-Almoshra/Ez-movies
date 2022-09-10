import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import ReactPaginate from 'react-paginate';
import {getPage} from  "../redux/actions/movieAction"
const PaginationComp = () => {
  //const [pageCount, setpageCount] = useState();
   const countPage=useSelector(state=>state.pageCount)
   const dispatch=useDispatch();
    const handlePageClick = (data) => {
       
        dispatch(getPage(data.selected + 1))
        //getMoviesInPage(data.selected + 1)
    }
   const pageCount=countPage;
  return (
    <ReactPaginate
    breakLabel="..."
    nextLabel="التالى"
    onPageChange={handlePageClick}
    marginPagesDisplayed={2}
    pageRangeDisplayed={2}
    pageCount={pageCount}
    previousLabel="السابق"
    containerClassName={"pagination justify-content-center p-3"}
    pageClassName={"page-item"}
    pageLinkClassName={"page-link"}
    previousClassName={"page-item"}
    nextClassName={"page-item"}
    previousLinkClassName={"page-link"}
    nextLinkClassName={"page-link"}
    breakClassName={"page-item"}
    breakLinkClassName={"page-link"}
    activeClassName={"active"}
/>
  )
}

export default PaginationComp