export function normalizeCountry(data) {
    const country = data[0]

    return {
        name: country.name?.common,
        flag: country.flags?.svg,
        coatOfArms: country.coatOfArms?.svg,

        population: country.population,
        region: country.region,
        capital: country.capital?.[0] ?? "N/A",
        area: country.area,
        carSide: country.car?.side ?? "N/A",

        currencies: Object.values(country.currencies || {})
            .map(c => c.name)
            .join(", "),

        languages: Object.values(country.languages || {}).join(", "),

        lat: country.latlng?.[0],
        lng: country.latlng?.[1],
    }
}