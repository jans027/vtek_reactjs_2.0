import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from "../components/LandingPage";
import Certificaciones from "../pages/Certificaciones";
import Servicios from "../pages/Servicios";

const dataStorage = JSON.parse(sessionStorage.getItem("element", "value"))

export const AppRoutes = () => {

    console.log(dataStorage.id)



    return (
        <BrowserRouter>
                    <Routes>
                        <Route path="/LandingPage" element={<LandingPage/>} />
                        <Route path={`/Servicios_${dataStorage.id}`} element={<Servicios/>} />
                        <Route path={`/Certificaciones_${dataStorage.id}`} element={<Certificaciones/>} />
                        <Route path="*" element={<Navigate to="/LandingPage"/>}/> 
                    </Routes>
                </BrowserRouter>
    );
}

export default AppRoutes;