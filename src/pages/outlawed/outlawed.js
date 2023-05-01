import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import WorldMap2 from "../../components/worldmap/WorldMap2";
import "./outlawed.css";

function Outlawed() {
  return (
    <div className="outlawed">
      <Header />
      <h2>Mapa de Criminalización</h2>
      <div className="textOutlawed">
        <h3>Un fuerte movimiento global ha mejorado el respeto por los derechos de las personas
          lesbianas, gays, bisexuales y transgénero (LGBT) en todo el mundo. Sin embargo, al menos
          67 países tienen leyes nacionales que penalizan las relaciones homosexuales entre adultos
          con consentimiento. Además, al menos  nueve países  cuentan con leyes nacionales que
          penalizan las formas de expresión de género dirigidas a personas transgénero y
          de género no conforme.</h3>
        <div className="colorDataOut">
          <h4>Rojo: Matrimonio</h4>
        </div>
      </div>
      <WorldMap2 />
      <Footer />
    </div>
  );
}

export default Outlawed;