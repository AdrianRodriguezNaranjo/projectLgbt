import Header from "../../components/header/Header";
import WorldMap from "../../components/worldmap/WorldMap";
import familyList from "../../services/familyprotectionList.service";

function Family() {
  const currentCountriesList = familyList();
  const title = "Mapa protección familiar";

  return (
    <>
    <Header />
    <WorldMap countries={currentCountriesList}/>
    </>
  );
}

export default Family;