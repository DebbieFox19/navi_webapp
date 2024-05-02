import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'; // Updated import statement
import NavBar from './NavBar';
import Request from './pages/Request';
import RequestManagement from './pages/RequestManagement'; // Corrected import statement
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Request" element={<Request />} />
          <Route path="/RequestManagement" element={<RequestManagement />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;