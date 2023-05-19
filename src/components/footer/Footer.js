import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="pages">
        <h1>Página:</h1>
        <h2><a href="/">HOME</a></h2>
        <h2><a href="/family">Protección Familiar</a></h2>
        <h2><a href="/outlawed">Criminalización</a></h2>
        <h2><a href="/news">Noticias</a></h2>
        <h2><a href="/chat">Chat</a></h2>
      </div>
      <div className="contactUs">
        <h1>Contact Us</h1>
        <h2>+34 680798959</h2>
        <h1><ion-icon name="logo-instagram"></ion-icon></h1>
        <h1><ion-icon name="logo-twitter"></ion-icon></h1>
        <h2>lgbtRigths@gmail.com</h2>
      </div>
      <div className="socialMedia">
        <h1>Más del projecto</h1>
        <h1><a href="https://github.com/Naidr/projectLgbt"><ion-icon name="logo-github"></ion-icon></a></h1>
        <h1><a href="https://www.figma.com/file/CUkgUyjP8I1X4M79PhQJuF/Rigths?type=design&node-id=0%3A1&t=Id2JGYhhIYfxaWIb-1"><ion-icon name="logo-figma"></ion-icon></a></h1>
        <h1><a type="application/rss+xml" target="_blanck" href="rss.xml" rel="noopener noreferer"><ion-icon name="logo-rss"></ion-icon></a></h1>
      </div>
      <div className="policy">
        <h2><a href="/policy">© 2023 Adrián</a></h2>
        <h2><a href="/policy">Todos los derechos reservados</a></h2>
        <h2><a href="/policy">Política de Privacidad y Cookies</a></h2>
      </div>
      <a href="#header"><ion-icon name="chevron-up-circle-outline"></ion-icon></a>
    </div>
  );
}

export default Footer;