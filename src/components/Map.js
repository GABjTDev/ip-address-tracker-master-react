import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map({ ubication }) {

    return (
        <MapContainer center={ubication} zoom={13} scrollWheelZoom={true} className="widthMap">
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={ubication}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )

}