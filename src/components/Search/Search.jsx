import './search.style.scss'
import { IoSearchSharp, IoClose } from "react-icons/io5"

function Search({ input, handleChange, iconClean, handleClear, searchCountries, handleItemClick, open, setSearch, setOpen }) {
    return (<div className='container-search'>
        <div className='input-search'>
            <input
                type="text"
                name='search'
                placeholder='Search Countries...'
                autoComplete="off"
                value={input}
                onChange={handleChange}
            />
            <IoClose className='close-icon'
                     style={{display: input.length ? 'block' : 'none'}}
                     onClick={handleClear}
                     title='clear'
            />
            <button className='search-button'
                onClick={()=> {
                    if(input.length === 0) return
                    setSearch(true)
                    setOpen(false)
                }}>
                <IoSearchSharp className='search-icon' />
            </button>
        </div>
        {input && open && searchCountries.length > 0 && (
            <div className='autocomplete'>
                <ul>
                    {searchCountries.map((item, index) => (
                        <li key={index} onClick={() => handleItemClick(item.name.common)}>
                            {item.name.common}
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>)
}

export default Search