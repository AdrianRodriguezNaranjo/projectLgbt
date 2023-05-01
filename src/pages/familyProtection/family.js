import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import WorldMap from "../../components/worldmap/WorldMap";
import "./family.css";

function Family() {
  return (
    <div className="family">
      <Header />
      <div className="text">
        <h2>Mapa protección familiar</h2>
        <h3>En 2001, Holanda se convirtió en el primer país en abrir el matrimonio civil a parejas
          del mismo sexo. Hoy hay 31 países con matrimonio igualitario, más recientemente,
          Austria, Chile, Costa Rica y Suiza.</h3>
        <h3>Otros doce países han puesto a disposición de las parejas del mismo sexo uniones civiles o
          uniones registradas. En algunos casos, las uniones civiles o las uniones registradas brindan
          los mismos derechos y responsabilidades que el matrimonio civil y difieren solo en el nombre.
          En otros casos, las uniones civiles otorgan algunos de estos derechos, pero no todos.</h3>
        <div className="colorData">
          <h4>Verde: Matrimonio</h4>
          <h5>Naranja: Unión civil</h5>
        </div>
      </div>
      <WorldMap />
      <Footer />
    </div>
  );
}

export default Family;