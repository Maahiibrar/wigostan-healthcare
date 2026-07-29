import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Products from "./components/Products";
import WhatsApp from "./components/WhatsApp";
import Certificate from "./components/Certificate";
import Gallery from "./components/Gallery";
import Enquiry from "./components/Enquiry";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <WhyChoose />
      <Certificate />
      <Gallery />
      <Enquiry />
      <Contact />
      <WhatsApp />
      <Footer />
    </>
  );
}

export default App;