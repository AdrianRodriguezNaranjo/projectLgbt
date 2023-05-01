import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";

const pride = [
  {
    text: "En todo el mundo hay personas que enfrentan violencia y desigualdad —y a veces"
    +"torturas o incluso ejecución— debido a quiénes aman, qué aspecto tienen o quiénes son."
    +"La orientación sexual y la identidad de género son aspectos integrales de nuestra"
    +"individualidad y en ningún caso deberían ser motivo de discriminación ni abusos."
    +"perpetrados por motivos de orientación",
    img: photo1
  }, {
    text: "Por un mundo donde todas las personas puedan gozar plenamente de sus derechos.",
    img: photo2
  }
];

const getPride = () => {
  return pride;
}

export default {
  getPride
};