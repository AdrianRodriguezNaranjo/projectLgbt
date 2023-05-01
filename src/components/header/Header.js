import "./Header.css";
import logo from "../../images/logo.png";

function Header() {
  return (
    <div className="header">
      <h1><a href="/home">HOME</a></h1>
      <a href="/home"><img src={logo} alt="Hola"/></a>
      <h1><a href="/family">Protección Familiar</a></h1>
      <h1><a href="/outlawed">Criminalización</a></h1>
    </div>
  );
}

export default Header;