import './places.style.scss'
import { Link } from 'react-router'
import LoadingItems from '../LoadingItems/LoadingItems.jsx'
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { FaUsers, FaLocationDot } from "react-icons/fa6"
import { FaGlobe } from "react-icons/fa"
import { MdApartment } from "react-icons/md"

function Places({ currentCountries, searchCountries, search, loading, error, fetchData }) {

    const data = search ? searchCountries : currentCountries

    if (loading) return <LoadingItems />
    if (error) return <ErrorMessage message={error} onRetry={fetchData} />
    return (<div className="countries-places">
        {data.length > 0 && data.map((country) => {
            return <div key={country.cca3} className="place">
                <Link to={`/Country/${country.cca3}`}>
                    <div className='container-img'>
                        <LazyLoadImage src={country.flags.svg} alt="flag" effect="blur" />
                    </div>
                    <div className='container-place-info'>
                        <h2>{country.name.common}</h2>
                        <p><FaUsers /> Population - {country.population}</p>
                        <p><FaGlobe /> Region - {country.region}</p>
                        <p><MdApartment /> Capital - {country.capital?.[0] ?? 'N/A'}</p>
                    </div>
                </Link>
                <Link
                    to={`https://www.google.com/maps/place/${country.name.common}`}
                    target='_blank'
                    rel='noreferrer'
                    className='link-google-maps'>
                    <FaLocationDot /> Google Maps
                </Link>
            </div>
        })}
    </div>)
}

export default Places