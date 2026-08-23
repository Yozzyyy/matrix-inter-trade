import { useState } from "react";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home": return <Home navigate={setCurrentPage} />;
      case "services": return <Services navigate={setCurrentPage} />;
      case "about": return <AboutUs navigate={setCurrentPage} />;
      default: return <Home navigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-paper text-ink font-body">
      <Navbar currentPage={currentPage} navigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer navigate={setCurrentPage} />
    </div>
  );
}