"use client";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


// Corrige os ícones que não aparecem no Next.js

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

export default function MapView() {
  return (
    <MapContainer center={[-22.6985, -46.9912]} zoom={15} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
      />
      <Marker position={[-22.6985, -46.9912]}>
        <Popup>
          Calhas Franco<br /> Rua Ferrúcio Augusto Testa, 52
        </Popup>
      </Marker>
    </MapContainer>
  );
}
