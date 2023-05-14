import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./pages/home/home";
import Outlawed from "./pages/outlawed/outlawed";
import Family from "./pages/familyProtection/family";
import Chat from "./pages/chat/chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/outlawed" element={<Outlawed />}/>
        <Route path="/family" element={<Family />}/>
        <Route path="/chat" element={<Chat />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
