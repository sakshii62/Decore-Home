import AnnouncementBar from "./components/AnnouncementBar.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Benefits from "./components/Benefits.jsx";
import Categories from "./components/Categories.jsx";
import BestSellers from "./components/BestSellers.jsx";
import PromoBanner from "./components/PromoBanners.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <Benefits/>
      <Categories/>
      <BestSellers/>
      <PromoBanner/>
      <Footer/>
    
    </div>
  );
}

export default App;