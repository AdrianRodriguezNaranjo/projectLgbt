import "./news.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NewsServices from "../../services/news.services.js";

function News() {
  const news = NewsServices.getNews();
  return (
    <>
      <Header />
      <div className="News">
        {news.map((item) => (
          <article key={item.new}>
            <div className="imgNews">
              <img src={item.img} alt={item.new} />
            </div>
            <div className="infoNews">
              <h2>{item.new}</h2>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default News;