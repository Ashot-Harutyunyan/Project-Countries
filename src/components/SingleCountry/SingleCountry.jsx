import './singleCountry.style.scss'
import { useState, useEffect } from 'react'
import { useParams } from "react-router"
import CountryMap from "../CountryMap/CountryMap.jsx"
import { fetchCountry } from '../fetchCountry/fetchCountry.js'
import { infoItems } from '../utils/infoItems.js'
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx"
import LoadingSingleCountry from "../LoadingSingleCountry/LoadingSingleCountry.jsx"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { FaUsers } from "react-icons/fa6"
import { FaGlobe } from "react-icons/fa"
import { MdApartment } from "react-icons/md"
import { LiaLanguageSolid, LiaMoneyBillWaveSolid } from "react-icons/lia"
import { IoCarSport } from "react-icons/io5"
import { PiMapPinAreaFill } from "react-icons/pi"

const icons = {
    FaUsers,
    FaGlobe,
    MdApartment,
    LiaLanguageSolid,
    LiaMoneyBillWaveSolid,
    IoCarSport,
    PiMapPinAreaFill
}

function SingleCountry() {

    const { code } = useParams()
    const [country, setCountry] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    async function load() {
        try {
            setLoading(true)
            setError(null)
            const data = await fetchCountry(code)
            setCountry(data)
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        load()
    },[code])

    if (loading) return <LoadingSingleCountry />
    if (error) return <ErrorMessage message={error} onRetry={load} />
    if (!country) return null

    return (<section className="singleCountry">
           <div className="container-img-info">
                <div className="container-img">
                    <LazyLoadImage src={country.flag} alt="flag" effect="blur" />
                    {country.coatOfArms && (
                        <LazyLoadImage src={country.coatOfArms} alt="coat" effect="blur" />
                    )}
                </div>
                <div className="container-info">
                    <h2>{country.name}</h2>
                    <div className="info-grid">
                        {infoItems(country).map((item) => {
                            const Icon = icons[item.icon]
                            return <div key={item.label} className='info-grid-item'>
                                <div>
                                    {Icon && <Icon />}
                                    <span>{item.label}</span>
                                </div>
                                <p>{item.value}</p>
                            </div>
                        })}
                    </div>
                </div>
           </div>
           {country.lat && country.lng && (
               <CountryMap lat={country.lat} lng={country.lng} />
           )}
    </section>)
}

export default SingleCountry