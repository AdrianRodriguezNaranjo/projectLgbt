import "./news.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NewsServices from "../../services/news.services.js";

function News5() {
  const news = NewsServices.getNews();
  const article = news[4];

  return (
    <>
      <Header />
      <div className="News">
        <article>
          <div className="imgNews">
            <img src={article.img} alt={article.new} />
          </div>
          <div className="infoNews">
            <h2>{article.new}</h2>
            <p>{article.description}</p>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}

export default News5;