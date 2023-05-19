import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./pages/home/home";
import Outlawed from "./pages/outlawed/outlawed";
import Family from "./pages/familyProtection/family";
import Chat from "./pages/chat/chat";
import Policy from "./pages/policy/policy";
import News from "./pages/news/news";
import News1 from "./pages/news/news1";
import News2 from "./pages/news/news2";
import News3 from "./pages/news/news3";
import News4 from "./pages/news/news4";
import News5 from "./pages/news/news5";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/outlawed" element={<Outlawed />}/>
        <Route path="/family" element={<Family />}/>
        <Route path="/chat" element={<Chat />}/>
        <Route path="/policy" element={<Policy />}/>
        <Route path="/news" element={<News />}/>
        <Route path="/news/1" element={<News1 />}/>
        <Route path="/news/2" element={<News2 />}/>
        <Route path="/news/3" element={<News3 />}/>
        <Route path="/news/4" element={<News4 />}/>
        <Route path="/news/5" element={<News5 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
