/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { data } from '../Data/data.js';
// import Logo from '../../src/images/logo_vtek.png';
// import logoFacebook from '../images/';
// import logoLInkedIn from '../../src/images/174857.png';
// import logoInstagram from '../../src/images/1409946.png';
import PhoneIcon from '@mui/icons-material/Phone';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import PlaceIcon from '@mui/icons-material/Place';
import BasicMenu from './BasicMenu.jsx';
import ResponsiveNavBar from './ResponsiveNavBar.jsx';






const NavBar = () => {


    const [datos] = data
    const { inicio } = datos

    // console.log(inicio.img.logoPrincipal)

    const handleClick = (e) => {
        console.log(e.target)
    }


    return (
        <nav className='contenedorNavBar'>
            <div className='direcciones'>
                <div>
                    <a target="_blank" href={inicio.urlDireccion} rel="noreferrer" > <PlaceIcon /> {inicio.direccion} </a>
                    <a> <PhoneIcon /> {inicio.telefono1} </a>
                    <a target="_blank" href={inicio.urlTelefono2} rel="noreferrer" > <PhonelinkRingIcon /> {inicio.telefono2} </a>
                </div>

                <div className='logosRedes'>
                    <a target="_blank" href={inicio.urlFacebook} rel="noreferrer" > <img src={`./images/${inicio.img.facebook}`} alt="facebook" /> </a>
                    <a target="_blank" href={inicio.urlLinkedIn} rel="noreferrer"> <img src={`./images/${inicio.img.linkedIn}`} alt="linkedIn" /> </a>
                    <a target="_blank" href={inicio.urlInstagram} rel="noreferrer"> <img src={`./images/${inicio.img.instagram}`} alt="instagram" /> </a>
                </div>
            </div>
            <div
                className='logoPrincipal'>
                <a href="/">
                    <img
                        src={`./images/${inicio.img.logoPrincipal}`}
                        alt={inicio.id}
                    />
                </a>
                <div>
                    <BasicMenu />
                </div>
            </div>
            <div>
                <ResponsiveNavBar />
            </div>
        </nav>
    )
}

export default NavBar