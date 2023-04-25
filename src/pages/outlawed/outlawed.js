import Header from "../../components/header/Header";
import WorldMap from "../../components/worldmap/WorldMap";
import outlawedList from "../../services/outlawedList.service";

function Outlawed() {
    const currentCountriesList = outlawedList();
    const title = "Mapa de Criminalización";
  
    return (
      <>      
      <Header />
      <WorldMap countries={currentCountriesList}/>
      </>
    );
}

export default Outlawed;