import './nav.style.scss'
import { Link, useLocation } from 'react-router'
import { useTheme } from "../../ctx/ThemeContext.jsx"
import { BsGlobeAmericas, BsFillMoonFill } from "react-icons/bs"
import { FaSun } from "react-icons/fa6"

function Nav() {

    const [theme, toggleTheme] = useTheme()
    const location = useLocation()
    const page = location.pathname.replace('/', '')
    const isGlobePage = page === 'GlobePage'
    const objectStyles = {
        navBackground: isGlobePage ? 'transparent' : 'var(--nav-bg)',
        iconColor: isGlobePage ? '#acacb0' : 'var(--icon-color)',
        textColor: isGlobePage ? '#acacb0' : 'var(--index-link-color)'
    }

    return (<nav style={{ background: objectStyles.navBackground }}>
        <Link to="/" className='link-index' style={{ color: objectStyles.textColor }}>
            Explore Countries
        </Link>
        <div className='container-link-theme'>
            <Link to="/GlobePage" className='link-globe-page'>
                <BsGlobeAmericas style={{ color: objectStyles.iconColor }} />
            </Link>
            <div className='container-theme' onClick={toggleTheme}>
                {theme === 'dark'
                    ? <BsFillMoonFill style={{ color: objectStyles.iconColor }} />
                    : <FaSun style={{ color: objectStyles.iconColor }} />}
            </div>
        </div>
    </nav>)
}

export default Nav