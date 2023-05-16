import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./pages/home/home";
import Outlawed from "./pages/outlawed/outlawed";
import Family from "./pages/familyProtection/family";
import Chat from "./pages/chat/chat";
import Policy from "./pages/policy/policy";
import News from "./pages/news/news";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
