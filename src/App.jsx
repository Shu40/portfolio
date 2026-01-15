import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import { Toaster } from "react-hot-toast";
import AnimatedBackground from "./components/AnimatedBackground";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import CertificationsSlider from "./components/CertificationsSlider";
import Achievements from "./components/Achievements";
import Blog from "./components/Blog";


function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
    
      <Experience />
      <Achievements />
      <Certifications />
      <CertificationsSlider />
      <Blog />
      <Contact />
      <Footer />
      <AnimatedBackground />
   
      


      <Toaster
        position="bottom-right"
        toastOptions={{
          style: { background: "#0f172a", color: "#fff" },
        }}
      />
    </>
  );
}

export default App;
