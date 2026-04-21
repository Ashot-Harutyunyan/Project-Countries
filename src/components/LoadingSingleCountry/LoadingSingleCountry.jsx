import './loadingSingleCountry.style.scss'

function LoadingSingleCountry() {
    return (<section className='singleCountry'>
        <div className="container-img-info">
            <div className='container-img'>
                <div className='skeleton skeleton-img' />
                <div className='skeleton skeleton-img' />
            </div>
            <div className='countries-info'>
                <div className='skeleton skeleton-title' />
                <div className='skeleton skeleton-info' />
            </div>
        </div>
        <div className='container-iframe'>
            <div className='skeleton skeleton-iframe' />
        </div>
    </section>)
}

export default LoadingSingleCountry