import PrideServices from "../../services/Pride.services";
import "./PrideList.css";
import logo from "../../images/logo.png";

function PrideList() {
  const getPride = () => {
    const allinfo = PrideServices.getPride();

    return (
      allinfo.map(c => {
        return (
          <div className="pride-list-item">
            <div className="pride-list-img">
              <img src={`/projectLgbt+/src/images/${c.img}`} alt="pride" />
            </div>
            <p>{c.text}</p>
          </div>
        );
      })
    );
  }

  return (
    <>
      {getPride()}
    </>
  );
}

export default PrideList;