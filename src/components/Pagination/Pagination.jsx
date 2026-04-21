import './pagination.style.scss'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { getPages } from '../utils/pagination.js'

function Pagination({ countriesPerPage, totalCountries, currentPage, setCurrentPage, setSearch }) {

    const totalPages = Math.ceil(totalCountries / countriesPerPage)
    const pages = getPages(totalPages, currentPage)

    function changePage(page) {
        setCurrentPage(page)
        setSearch(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handlePrev = () => {
        changePage(currentPage - 1)
    }

    const handleNext = () => {
        changePage(currentPage + 1)
    }

    const handlePageClick = (page) => {
        if (page === '...') return
        changePage(page)
    }

    return (<div className='container-pagination'>
        <button className='button-arrow-back'
                onClick={handlePrev}
                disabled={currentPage === 1}
        >
            <IoIosArrowBack className='arrow-back' />
        </button>
        {pages.map((page, i) => (
            <span key={i}
                  className={currentPage === page ? 'active' : null}
                  onClick={() => handlePageClick(page)}
            >{page}</span>
        ))}
        <button className='button-arrow-forward'
                onClick={handleNext}
                disabled={currentPage === totalPages}
        >
            <IoIosArrowForward className='arrow-forward' />
        </button>
    </div>)
}

export default Pagination