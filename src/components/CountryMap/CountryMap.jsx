export default function CountryMap({ lat, lng }) {
    return  <div className='container-iframe'>
        <iframe
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: "12px" }}
            loading="lazy"
            src={`https://maps.google.com/maps?q=${lat},${lng}&z=5&output=embed`}
        />
    </div>
}