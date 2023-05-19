import "./Header.css";
import logo from "../../images/logo.png";

function Header() {
  return (
    <div id="header" className="header">
      <a href="/home"><img className="logo" src={logo} alt="Hola"/></a>
      <h1><a href="/family">Protección Familiar</a></h1>
      <h1><a href="/outlawed">Criminalización</a></h1>
      <h1><a href="/news">Noticias</a></h1>
      <h1><a href="/chat">Chat</a></h1>
      <h1><a href="/policy">Nuestra politica</a></h1>
    </div>
  );
}

export default Header;