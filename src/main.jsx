import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Booking from './pages/Booking.jsx';         
import Availability from './pages/Availability.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/availability" element={<Availability />} /> {/* New route */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
