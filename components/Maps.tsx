import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import * as leaflet from 'leaflet'
// import 'leaflet/dist/leaflet.css';
import "leaflet/dist/images/marker-shadow.png"

export default function Maps() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
