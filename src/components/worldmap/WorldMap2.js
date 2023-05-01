import { MapContainer, TileLayer } from 'react-leaflet';
import "./WorldMap.css";
import 'leaflet/dist/leaflet.css';
import BorderOutlawed from '../../services/BorderCountriesOutlawed';

function WorldMap2() {
  return (
    <>
      <MapContainer id='2' center={[0.41601499200755143, 9.471003298065503]} zoom={2} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <BorderOutlawed/>
      </MapContainer>
    </>
  );
}

export default WorldMap2;