import './loadingItems.style.scss'

function LoadingItems() {
    return <div className="countries-places">
        {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="place place-skeleton">
                <div className="skeleton skeleton-img" />
                <div className="skeleton skeleton-title" />
                <div className="skeleton skeleton-line" />
                <div className="skeleton skeleton-line skeleton-line-short" />
            </div>
        ))}
    </div>
}

export default LoadingItems