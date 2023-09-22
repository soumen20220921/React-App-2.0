import Header from "./components/Header";
import Home from "./Home";
import Wtwy from "./Wtwy";
import HeAssistant from "./HeAssistant"
import News from "./News";
import Footer from './components/Footer'
import {  Routes, Route } from "react-router-dom";
import Getstarted from "./getStarted";
import Services from "./Services";

function App() {
  return (
    <div>
      
    <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wtwy" element={<Wtwy />} />
      <Route path="/heassistant" element={<HeAssistant />} />
      <Route path="/services" element={<Services />} />
      <Route path="/news" element={<News />} />
      <Route path="/getstarted" element={<Getstarted />} />
      </Routes>
   <Footer />
    </div>
    
    
  );
}

export default App;
