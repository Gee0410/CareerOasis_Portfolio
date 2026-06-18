import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatBar from "./components/StatBar";
import Challenge from "./components/Challenge";
import Features from "./components/Features";
import Demo from "./components/Demo";
import Showcase from "./components/Showcase";
import TechStack from "./components/TechStack";
import Reflection from "./components/Reflection";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-oasis-cream font-sans text-oasis-text selection:bg-oasis-light selection:text-oasis-primary">
      <Navbar />
      <Hero />
      <StatBar />
      <Challenge />
      <Features />
      <Demo />
      <Showcase />
      <TechStack />
      <Reflection />
      <Cta />
      <Footer />
    </div>
  );
}