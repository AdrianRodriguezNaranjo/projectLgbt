import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./WorldMap.css";

function WorldMap(props) {
    const countries = props.countries;
    return (
      <>       
        <MapContainer center={[0.41601499200755143, 9.471003298065503]} zoom={3} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {countries.map((s) => {
            return (
              <Marker position={[s.latitude, s.longitude]}>
                <Popup>
                  {s.title} <br /> {s.description}
                </Popup>
              </Marker>
            )
          })
          }
        </MapContainer>
      </>
    );
  }
  
  export default WorldMap;