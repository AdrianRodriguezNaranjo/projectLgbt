import "./news.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NewsServices from "../../services/news.services.js";

function News() {
  const item = NewsServices.getNews();
  return (
    <div className="News">
      <Header />
      <div className="textNews">
        {news.map((item) => (
          <article key={item.new}>
            <img src={item.img} alt={item.new} />
            <h2>{item.new}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default News;