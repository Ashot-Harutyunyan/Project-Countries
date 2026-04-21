import './countries.style.scss'
import { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'react-router'
import { useSearch } from "../hooks/useSearch.js"
import Search from "../Search/Search.jsx"
import Places from '../Places/Places.jsx'
import Pagination from '../Pagination/Pagination.jsx'

function Countries() {

    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const [searchParams, setSearchParams] = useSearchParams()
    const countriesPerPage = 20

    const currentPage = parseInt(searchParams.get('page') || '1', 10)

    const setCurrentPage = (page) => {
        setSearchParams({ page })
    }

    const { input, open, search,
        setOpen, setSearch, searchCountries,
        handleChange, handleClear, handleItemClick,
    } = useSearch(countries)

    const lastCountryIndex = currentPage * countriesPerPage
    const firstCountryIndex = lastCountryIndex - countriesPerPage
    const currentCountries = countries.slice(firstCountryIndex, lastCountryIndex)

    const fetchData = useCallback(async () => {
        try {
            setLoading(true)
            setError(null)
            const response = await fetch('https://restcountries.com/v3.1/all?fields=cca3,name,flags,population,region,capital')
            if (!response.ok) throw new Error(`HTTP error: ${response.status}`)
            const data = await response.json()
            setCountries(data)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (<section className='countries'>
        <Search
            input={input}
            open={open}
            searchCountries={searchCountries}
            handleChange={handleChange}
            handleClear={handleClear}
            handleItemClick={handleItemClick}
            setOpen={setOpen}
            setSearch={setSearch}
        />
        <Places
            currentCountries={currentCountries}
            searchCountries={searchCountries}
            search={search}
            loading={loading}
            error={error}
            fetchData={fetchData}
        />
        <Pagination
            countriesPerPage={countriesPerPage}
            totalCountries={countries.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setSearch={setSearch}
        />
    </section>)
}

export default Countries