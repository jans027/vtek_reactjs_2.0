import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import LandingPage from "../components/LandingPage";
// import { data } from "../Data/data";
import Certificaciones from "../pages/Certificaciones";
import Servicios from "../pages/Servicios";
import BasicMenu from "../components/BasicMenu";


export const AppRoutes = () => {

    // variables to url component
    const retie = "retie";

    return (
        <Router>
            <Routes>
                <Route path="/LandingPage" element={<LandingPage />} />
                <Route element={<BasicMenu />} />
                <Route path='/Servicios' element={<Servicios />} />
                <Route path='/Certificaciones' element={<Certificaciones />} />
                <Route path="*" element={<Navigate to="/LandingPage" />} />

                <Route path="/Certificaciones/:id" element={<Certificaciones />} />

            </Routes>
        </Router>
    );
}

export default AppRoutes;