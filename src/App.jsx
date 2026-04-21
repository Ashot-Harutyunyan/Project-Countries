import './app.style.scss'
import Nav from './components/Nav/Nav.jsx'
import { Outlet } from "react-router"

function App() {
    return (<>
        <Nav />
        <Outlet />
    </>)
}

export default App