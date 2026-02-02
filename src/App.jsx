import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import './App.css'; // or './index.css' depending on your setup

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;