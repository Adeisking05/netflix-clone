import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Account from "./Pages/Account";
import ProtectedRoutes from "./Components/ProtectedRoutes";
const App = () => {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route
            path="/Account"
            element={
              <ProtectedRoutes>
                <Account />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
