export const infoItems = (country) => [
    { icon: 'FaUsers', label: "Population", value: country.population },
    { icon: 'FaGlobe', label: "Region", value: country.region },
    { icon: 'MdApartment', label: "Capital", value: country.capital },
    { icon: 'PiMapPinAreaFill', label: "Territory", value: country.area },
    { icon: 'IoCarSport', label: "Traffic", value: country.carSide },
    { icon: 'LiaMoneyBillWaveSolid', label: "Currencies", value: country.currencies },
    { icon: 'LiaLanguageSolid', label: "Languages", value: country.languages },
]