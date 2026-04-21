import './errorBoundary.style.scss'
import { useRouteError, isRouteErrorResponse, Link } from 'react-router'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function ErrorBoundary() {

    const error = useRouteError()
    let title = 'Page not found'
    let message = 'Something went wrong'

    if (isRouteErrorResponse(error)) {
        title = `Error ${error.status}`
        message = error.statusText || "Routing error"
    } else if (error instanceof Error) {
        message = error.message
    } else {
        message = 'Unexpected error occurred'
    }

    return (<section className='error-boundary'>
        <h2>{title}</h2>
        <LazyLoadImage src='error-image.png' alt="flag" effect="blur" />
        <p>{message}</p>
        <Link to="/">Go back home</Link>
    </section>)
}

export default ErrorBoundary