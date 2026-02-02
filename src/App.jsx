import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import NotFound from "./Pages/Notfound";
import "./App.css"; // or './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
