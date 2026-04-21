import { useState, useMemo } from 'react'

export function useSearch(countries) {

    const [input, setInput]   = useState('')
    const [open, setOpen]     = useState(false)
    const [search, setSearch] = useState(false)

    const searchCountries = useMemo(() => {
       return countries.filter(({ name }) => name.common.toLowerCase().includes(input.toLowerCase()))
    },[countries, input])

    function handleChange(e) {
        setInput(e.target.value)
        if (e.target.value.length) {
            setOpen(true)
            setSearch(false)
        } else {
            setOpen(false)
        }
    }

    function handleClear() {
        setInput('')
        setOpen(false)
        setSearch(false)
    }

    function handleItemClick(name) {
        setInput(name)
        setOpen(false)
        setSearch(true)
    }

    return {
        input,
        open,
        search,
        setOpen,
        setSearch,
        searchCountries,
        handleChange,
        handleClear,
        handleItemClick,
    }
}