import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// Poprawienie problemu z brakiem ikon w leaflet
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = () => {
  const position = [49.35612974900179, 22.286324397149627]; // Współrzędne dla adresu Mchawa 122, 38-606 Baligród

  return (
    <MapContainer
      center={position}
      zoom={16}
      style={{
        height: "400px",
        width: "100%",
        position: "relative",
        zIndex: 1,
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Agroturystyka Wilkowyja w Bieszczadach
          <br /> Mchawa 122, 38-606 Baligród
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
