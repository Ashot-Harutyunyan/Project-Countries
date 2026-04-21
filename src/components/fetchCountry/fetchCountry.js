import { normalizeCountry } from '../utils/normalizeCountry.js'

export async function fetchCountry(code) {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`)
    const data = await res.json()
    return normalizeCountry(data)
}