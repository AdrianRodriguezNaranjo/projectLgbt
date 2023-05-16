const news = [
  {
    new: "Activistas polacos ganan casos encontra de 'LGBT-free zones'",
    description: "Los intentos de las autoridades de silenciar los " +
      "activistas LGBT fallan en las cortes",
    img: photo1
  }, {
    new: "Nepal: Tribunales ordenan reconocimiento de parejas del mismo sexo",
    description: "Reiteradas recomendaciones para el matrimonio igualitario",
    img: photo2
  }, {
    new: "La provincia pakistaní Sindh, respalda los derechos trans",
    description: "Las autoridades nacionales necesitan hacer más para " +
      "proteger a las personas trans de la violencia",
    img: photo2
  }, {
    new: "El matrimonio igualitario podría aportar autonomía y seguridad a " +
      "las mujeres",
    description: "Nuevo informe aborda la violencia familiar contra las " +
      "mujeres queer y transgénero",
    img: photo2
  }, {
    new: "Sentencia contra Perú es una victoria para la igualdad LGBT",
    description: "Corte regional reafirma el derecho a la igualdad en la prestación de servicios",
    img: photo2
  }
];

const getNews = () => {
  return news;
}

export default {
  getNews
};