import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import PrideList from "../../components/prideList/PrideList";
import "./home.css";

function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="textHome">
        <h1>LGBTIQ+</h1>
        <PrideList />
      </div>
      <Footer />
    </div>
  );
}

export default Home;