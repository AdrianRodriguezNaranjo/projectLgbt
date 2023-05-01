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

function Algeria() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/DZA.geojson"
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

function Bangladesh() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/BGD.geojson"
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

function Brunei() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/BRN.geojson"
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

function Burundi() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/BDI.geojson"
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

function Cameroon() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/CMR.geojson"
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

function Chad() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/TCD.geojson"
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

function Comoros() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/COM.geojson"
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

function CookIsland() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/COK.geojson"
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

function Dominica() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/DMA.geojson"
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

function Egypt() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/EGY.geojson"
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

function Eritrea() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/ERI.geojson"
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

function Eswatini() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/SWZ.geojson"
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

function Ethiopia() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/ETH.geojson"
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

function Gambia() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/GMB.geojson"
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

function Ghana() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/GHA.geojson"
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

function Grenada() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/GRD.geojson"
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

function Guinea() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/GIN.geojson"
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

function Guyana() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/GUY.geojson"
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

function Iran() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/IRN.geojson"
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

function Jamaica() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/JAM.geojson"
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

function Kenya() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/KEN.geojson"
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

function Kiribati() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/KIR.geojson"
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

function Kuwait() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/KWT.geojson"
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

function Lebanon() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/LBN.geojson"
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

function Liberia() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/LBR.geojson"
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

function Libya() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/LBY.geojson"
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

function Malawi() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/MWI.geojson"
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

function Malaysia() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/MYS.geojson"
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

function Maldives() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/MDV.geojson"
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

function Mauritania() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/MRT.geojson"
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

function Mauritius() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/MUS.geojson"
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

function Morocco() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/MAR.geojson"
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

function Myanmar() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/MMR.geojson"
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

function Namibia() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/NAM.geojson"
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

function Nigeria() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/NGA.geojson"
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

function Oman() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/OMN.geojson"
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

function Pakistan() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/PAK.geojson"
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

function PapuaNewGuinea() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/PNG.geojson"
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

function Qatar() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/QAT.geojson"
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

function SaintLucia() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/LCA.geojson"
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

function SaintVicent() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/VCT.geojson"
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

function Samoa() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/WSM.geojson"
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

function SaudiArabia() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/SAU.geojson"
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

function Senegal() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/SEN.geojson"
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

function SierraLeone() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/SLE.geojson"
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

function SolomonIslands() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/SLB.geojson"
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

function Somalia() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/SOM.geojson"
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
/*
function SouthSudan() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/SSD.geojson"
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
}*/

function SriLanka() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/LKA.geojson"
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

function Sudan() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/SDN.geojson"
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

function Syria() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/SYR.geojson"
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

function Tanzania() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/TZA.geojson"
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

function Togo() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/TGO.geojson"
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

function Tonga() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/TON.geojson"
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

function Tunisia() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/TUN.geojson"
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

function Turkmenistan() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/TKM.geojson"
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

function Tuvalu() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/TUV.geojson"
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

function Uganda() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/UGA.geojson"
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

function UnitedArabEmirates() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/ARE.geojson"
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

function Uzbekistan() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/UZB.geojson"
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

function Yemen() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/YEM.geojson"
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

function Zambia() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/ZMB.geojson"
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

function Zimbabwe() {
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
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/ZWE.geojson"
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
      <Algeria />
      <Bangladesh />
      <Brunei />
      <Burundi />
      <Cameroon />
      <Chad />
      <Comoros />
      <CookIsland />
      <Dominica />
      <Egypt />
      <Eritrea />
      <Eswatini />
      <Ethiopia />
      <Gambia />
      <Ghana />
      <Grenada />
      <Guinea />
      <Guyana />
      <Iran />
      <Jamaica />
      <Kenya />
      <Kiribati />
      <Kuwait />
      <Lebanon />
      <Liberia />
      <Libya />
      <Malawi />
      <Malaysia />
      <Maldives />
      <Mauritania />
      <Mauritius />
      <Morocco />
      <Myanmar />
      <Namibia />
      <Nigeria />
      <Oman />
      <Pakistan />
      <PapuaNewGuinea />
      <Qatar />
      <SaintLucia />
      <SaintVicent />
      <Samoa />
      <SaudiArabia />
      <Senegal />
      <SierraLeone />
      <SolomonIslands />
      <Somalia />
      
      <SriLanka />
      <Sudan />
      <Syria />
      <Tanzania />
      <Togo />
      <Tonga />
      <Tunisia />
      <Turkmenistan />
      <Tuvalu />
      <Uganda />
      <UnitedArabEmirates />
      <Uzbekistan />
      <Yemen />
      <Zambia />
      <Zimbabwe />
    </>
  );
}

export default BorderOutlawed;