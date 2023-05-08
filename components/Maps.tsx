"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "../styles/maps.module.css";

export default function Maps() {
  const position = [28.46, 77.49];
  return (
    <MapContainer
      className={styles.map_container}
      center={position}
      zoom={15}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={position}>
        <Popup>🐻🍻🎉</Popup>
      </Marker> */}
    </MapContainer>
  );
}
