import { GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from "react";

function Border() {
  const [geoJSON, setGeoJSON] = useState([]);

  const style = (feature) => {
    return {
      fillColor: "red",
      weight: 2,
      opacity: 1,
      color: "red", //Outline color
      fillOpacity: 0.2
    };
  }

  const allBorder = [
    {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/AFG.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/DZA.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/BGD.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/BRN.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/BDI.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/CMR.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/TCD.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/COM.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/COK.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/DMA.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/EGY.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/ERI.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/SWZ.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/ETH.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/GMB.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/GHA.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/GRD.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/GIN.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/GUY.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/IRN.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/JAM.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/KEN.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/KIR.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/KWT.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/LBN.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/LBR.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/LBY.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/MWI.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/MYS.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/MDV.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/MRT.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/MUS.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/MAR.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/MMR.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/NAM.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/NGA.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/OMN.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/PAK.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/PNG.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/QAT.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/LCA.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/VCT.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/WSM.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/SAU.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/SEN.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/SLE.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/SLB.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/SOM.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/LKA.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/SDN.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/SYR.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/TZA.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/TGO.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/TON.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/TUN.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/TKM.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/TUV.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/UGA.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/ARE.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/UZB.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/YEM.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/ZMB.geojson"
    }, {
      url: "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/ZWE.geojson"
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

function BorderOutlawed() {
  return (
    <>
      <Border />
    </>
  );
}

export default BorderOutlawed;