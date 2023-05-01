import { GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from "react";

function Afganistan() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "red",
      weight: 2,
      opacity: 1,
      color: "red", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/AFG.geojson"
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setGeoJSON(data);
      });
  };
  useEffect(() => {
    fetchGeoJSON();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {geoJSON && <GeoJSON data={geoJSON} style={style} />}
    </>
  );
}

function BorderOutlawed() {
  return (
    <>
      <Afganistan />
    </>
  );
}


export default BorderOutlawed;