import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

//import pages to the main app
import NavBar from './NavBar';
import Request from './pages/Request';
import RequestManagement from './pages/RequestManagement';
import SignInPage from './pages/SignIn';
import CreateAccountPage from './pages/CreateAccount';
import Homepage from './pages/Homepage';


//Function that loads the page based on url with wrappers that provide authcontext to all childres and checks if user is logged in.

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <br/>
        <br/>

        <div id="page-body">
          <UserAuthContextProvider>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/signin" element={<SignInPage />} /> 
              <Route path="/Request" element={<ProtectedRoute> <Request /> </ProtectedRoute>} />
              <Route path="/RequestManagement" element={<ProtectedRoute> <RequestManagement /> </ProtectedRoute>} />
              <Route path="/CreateAccount" element={<CreateAccountPage />} />
            </Routes>
          </UserAuthContextProvider>
        </div>
        <br/>
        <br/>
        <footer style={{ backgroundColor: "#f2f2f2", padding: "10px", textAlign: "center", position: "fixed", bottom: "0", width: "100%" }}>
          <p style={{ margin: "0" }}>NAVI - Improving Predictability</p>
          <p style={{ margin: "0", fontSize: "12px", color: "#888" }}>© 2024 Debbie Fox. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;