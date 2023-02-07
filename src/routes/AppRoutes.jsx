import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import BasicMenu from "../components/BasicMenu";
import LandingPage from "../components/LandingPage";
import Certificaciones from "../pages/Certificaciones";
import Servicios from "../pages/Servicios";



export const AppRoutes = () => {


    return (
        <BrowserRouter>
                    <Routes>
                        <Route path="/LandingPage" element={<LandingPage/>} />
                        <Route path="/Servicios" element={<Servicios/>} />
                        <Route path="/Certificaciones" element={<Certificaciones/>} />
                        <Route path="*" element={<Navigate to="/LandingPage"/>}/> 
                    </Routes>
                </BrowserRouter>
    );
}

export default AppRoutes;