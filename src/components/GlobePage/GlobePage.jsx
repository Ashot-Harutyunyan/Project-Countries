import './globePage.style.scss'
import { useRef, useEffect, useState } from 'react'
import Globe from 'react-globe.gl'

function GlobePage() {

    const globeRef = useRef()
    const [countries, setCountries] = useState({ features: [] })
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        // resize handler
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener('resize', handleResize)

        // loading countries
        fetch('https://unpkg.com/world-atlas@2/countries-110m.json')
            .then(res => res.json())
            .then(data => {
                import('topojson-client').then(({ feature }) => {
                    setCountries(feature(data, data.objects.countries))
                })
            })

        // setup globe
        if (globeRef.current) {
            const controls = globeRef.current.controls()
            controls.autoRotate = false
            controls.autoRotateSpeed = 0.5
            globeRef.current.pointOfView({ altitude: 1.8 }, 0)
        }

        // cleanup
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return <section className='container-globe'>
        <Globe
            ref={globeRef}
            globeTileEngineUrl={(x, y, z) => `https://tile.openstreetmap.org/${z}/${x}/${y}.png`}
            backgroundImageUrl="https://unpkg.com/three-globe/example/img/night-sky.png"
            atmosphereColor="#4a9eff"
            atmosphereAltitude={0.15}
            polygonsData={countries.features}
            polygonAltitude={0.005}
            polygonCapColor={() => 'rgba(0,0,0,0)'}
            polygonSideColor={() => 'rgba(0,0,0,0)'}
            polygonStrokeColor={() => '#ff8888'}
            width={size.width}
            height={size.height}
        />
    </section>
}

export default GlobePage