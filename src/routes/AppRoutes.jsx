import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from "../components/LandingPage";
// import { data } from "../Data/data";
import Certificaciones from "../pages/Certificaciones";
import Servicios from "../pages/Servicios";
import BasicMenu from "../components/BasicMenu";


export const AppRoutes = () => {




    return (
        <BrowserRouter>
                    <Routes>
                        <Route path="/LandingPage" element={<LandingPage/>} />
                        <Route element={<BasicMenu/>}/>
                        <Route path='/Servicios' element={<Servicios/>} />
                        <Route path='/Certificaciones' element={<Certificaciones/>} />
                        <Route path="*" element={<Navigate to="/LandingPage"/>}/> 
                    </Routes>
                </BrowserRouter>
    );
}

export default AppRoutes;