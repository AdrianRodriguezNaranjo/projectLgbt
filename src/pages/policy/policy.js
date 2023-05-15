import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./policy.css";

function Policy() {
  return (
    <div className="policy">
      <Header />
      <div className="text">
        <div class="privacy">
          <h2>Política de privacidad</h2>
          <h5>Información que recopilamos</h5>
          <p>Recopilamos información sobre usted cuando se registra en nuestro sitio web, realiza un pedido, se suscribe a nuestro boletín informativo o completa un formulario.</p>
          <h5>Uso de su información personal</h5>
          <p>La información personal que recopilamos de usted se utiliza para procesar transacciones y enviar correos electrónicos periódicos.</p>
          <h5>Divulgación a terceros</h5>
          <p>No vendemos, intercambiamos ni transferimos a terceros su información personal identificable.</p>
        </div>
        <div class="cookies">
          <h2>Política de cookies</h2>
          <p>Nuestro sitio web utiliza cookies para mejorar su experiencia en línea. Al continuar navegando por nuestro sitio web, acepta nuestro uso de cookies.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Policy;