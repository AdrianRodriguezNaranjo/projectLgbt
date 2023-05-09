import { GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from "react";

function BorderGreen() {
  const [geoJSON, setGeoJSON] = useState([]);

  const style = (feature) => {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }

  const allBorder = [
    {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/ARG.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/AUS.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/AUT.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/BEL.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/BRA.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/CAN.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/CHL.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/COL.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/CRI.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/DNK.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/ECU.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/FIN.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/FRA.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/DEU.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/ISL.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/IRL.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/LUX.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/MLT.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/MEX.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/NLD.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/NZL.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/NOR.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/PRT.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/SVN.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/ZAF.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/ESP.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/SWE.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/CHE.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/TWN.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/USA.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/URY.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/GBR.geojson"
    }
  ];

  const fetchGeoJSON = async () => {
    allBorder.map(async b => {
      fetch(b.url)
        .then(res => res.json())
        .then((data) => {
          setGeoJSON(oldValues => [...oldValues, data])
        })
    });
  }

  useEffect(() => {
    fetchGeoJSON();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {geoJSON &&
        geoJSON.map((g, index) =>
          <GeoJSON key={index} data={g} style={style} />
        )
      }
    </>
  );
}

function BorderOrange() {
  const [geoJSON, setGeoJSON] = useState([]);

  const style = (feature) => {
    return {
      fillColor: "orange",
      weight: 2,
      opacity: 1,
      color: "orange", //Outline color
      fillOpacity: 0.2
    };
  }

  const allBorder = [
    {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/AND.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/HRV.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/CYP.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/CZE.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/EST.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/GRC.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/HUN.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/ITA.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/LIE.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/MCO.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/SMR.geojson"
    }
  ];

  const fetchGeoJSON = async () => {
    allBorder.map(async b => {
      fetch(b.url)
        .then(res => res.json())
        .then((data) => {
          setGeoJSON(oldValues => [...oldValues, data])
        })
    });
  }

  useEffect(() => {
    fetchGeoJSON();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {geoJSON &&
        geoJSON.map((g, index) =>
          <GeoJSON key={index} data={g} style={style} />
        )
      }
    </>
  );
}


function BorderFamily() {
  return (
    <>
      <BorderGreen />
      <BorderOrange />
    </>
  );
}

export default BorderFamily;