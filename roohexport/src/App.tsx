import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutPage from "./pages/About_Us_Page";
import ContactPage from "./pages/Contact_Page";
import { Home } from "./pages/Home";
import { Navbar } from "./components/sections/Navbar";
import ProductListingPage from "./pages/ProductsList";

function App() {
  return (
    <>
      <Router>
        <div className="bg-stone-50 min-h-screen flex flex-col font-sans">
          {/* Navbar sits here, outside Routes so it shows on every page */}
          <Navbar />

          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductListingPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>

          {/* Footer (from your sketch) */}
          <footer className="border-t border-stone-200 bg-white p-8 text-center md:text-left md:flex justify-between items-center text-stone-500 text-sm mt-auto">
            <p>© 2025 Kaftan Collection. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0 justify-center">
              <a href="#" className="hover:text-black">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-black">
                Terms of Service
              </a>
            </div>
          </footer>
        </div>
      </Router>
    </>
  );
}

export default App;
