import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screen/HomeScreen";
import {  Routes, Route } from "react-router-dom";
import CompScreen from "./screen/CompScreen";
import EnquiryScreen from './screen/EnquiryScreen'
import PlacementScreen from './screen/PlacementScreen'
import AboutScreen from './screen/AboutScreen'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/comp" element={<CompScreen />} />
        <Route path="/enquiry" element={<EnquiryScreen />} />
        <Route path="/placement" element={<PlacementScreen />} />
        <Route path="/about" element={<AboutScreen />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
