import { GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from "react";

function Argentina() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/ARG.geojson"
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

function Andorra() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "orange",
      weight: 2,
      opacity: 1,
      color: "orange", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/AND.geojson"
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

function Australia() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/AUS.geojson"
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

function Austria() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/AUT.geojson"
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

function Belgica() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/BEL.geojson"
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

function Brazil() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/BRA.geojson"
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

function Canada() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/CAN.geojson"
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

function Chile() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/CHL.geojson"
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

function Colombia() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/COL.geojson"
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

function CostaRica() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/CRI.geojson"
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

function Croatia() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "orange",
      weight: 2,
      opacity: 1,
      color: "orange", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/HRV.geojson"
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

function Cypres() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "orange",
      weight: 2,
      opacity: 1,
      color: "orange", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/CYP.geojson"
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

function Czech() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "orange",
      weight: 2,
      opacity: 1,
      color: "orange", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/CZE.geojson"
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

function Denmark() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/DNK.geojson"
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

function Ecuador() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/ECU.geojson"
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

function Estonia() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "orange",
      weight: 2,
      opacity: 1,
      color: "orange", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/EST.geojson"
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

function Finland() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/FIN.geojson"
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

function France() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/FRA.geojson"
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

function Germany() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/DEU.geojson"
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

function Greece() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "orange",
      weight: 2,
      opacity: 1,
      color: "orange", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/GRC.geojson"
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

function Hungary() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "orange",
      weight: 2,
      opacity: 1,
      color: "orange", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/HUN.geojson"
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

function Iceland() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/ISL.geojson"
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

function Ireland() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/IRL.geojson"
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

function Italy() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "orange",
      weight: 2,
      opacity: 1,
      color: "orange", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/ITA.geojson"
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

function Liechtenstein() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "orange",
      weight: 2,
      opacity: 1,
      color: "orange", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/LIE.geojson"
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

function Luxembourg() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/LUX.geojson"
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

function Malta() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/MLT.geojson"
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

function Mexico() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/MEX.geojson"
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

function Monaco() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "orange",
      weight: 2,
      opacity: 1,
      color: "orange", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/MCO.geojson"
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

function Netherlands() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/NLD.geojson"
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

function NewZealand() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/NZL.geojson"
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

function Norway() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/NOR.geojson"
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

function Portugal() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/PRT.geojson"
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

function SanMarino() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "orange",
      weight: 2,
      opacity: 1,
      color: "orange", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/SMR.geojson"
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

function Slovenia() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/SVN.geojson"
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

function SouthAfrica() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/ZAF.geojson"
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

function Spain() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/ESP.geojson"
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

function Sweden() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/SWE.geojson"
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

function Switzerland() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/CHE.geojson"
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

function Taiwan() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/TWN.geojson"
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

function USA() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/USA.geojson"
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

function Uruguay() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/URY.geojson"
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

function GBR() {
  const [geoJSON, setGeoJSON] = useState(null);
  function style(feature) {
    return {
      fillColor: "green",
      weight: 2,
      opacity: 1,
      color: "green", //Outline color
      fillOpacity: 0.2
    };
  }
  const fetchGeoJSON = () => {
    fetch(
      "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/GBR.geojson"
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

function BorderFamily() {
  return (
    <>
      <Argentina />
      <Andorra />
      <Australia />
      <Austria />
      <Belgica />
      <Brazil />
      <Canada />
      <Chile />
      <Colombia />
      <CostaRica />
      <Croatia />
      <Cypres />
      <Czech />
      <Denmark />
      <Ecuador />
      <Estonia />
      <Finland />
      <France />
      <Germany />
      <Greece />
      <Hungary />
      <Iceland />
      <Ireland />
      <Italy />
      <Liechtenstein />
      <Luxembourg />
      <Malta />
      <Mexico />
      <Monaco />
      <Netherlands />
      <NewZealand />
      <Norway />
      <Portugal />
      <SanMarino />
      <Slovenia />
      <SouthAfrica />
      <Spain />
      <Sweden />
      <Switzerland />
      <Taiwan />
      <USA />
      <Uruguay />
      <GBR />
    </>
  );
}

export default BorderFamily;