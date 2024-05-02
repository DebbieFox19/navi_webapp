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
        <footer style={{ backgroundColor: "#f2f2f2", padding: "10px", textAlign: "center" }}>
          <p style={{ margin: "0" }}>NAVI - Improving Predictability</p>
          <p style={{ margin: "0", fontSize: "12px", color: "#888" }}>© 2024 Debbie Fox. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;