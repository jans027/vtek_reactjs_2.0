import React from 'react'
import { data } from '../Data/data';
import PhoneIcon from '@mui/icons-material/Phone';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import PlaceIcon from '@mui/icons-material/Place';
import { useState } from 'react';




const Footer = () => {


    const [datos] = data
    const { inicio, certificaciones, servicios, consulta, cotice } = datos
    const menus1 = Object.values(certificaciones)
    const menus2 = Object.values(servicios)
    const menus3 = Object.values(consulta)
    const menus4 = Object.values(cotice)
    // console.log(menus1)

    const [detalle, setDetalle] = useState([])
    // console.log(detalle)

    const handleClick = (e) => {

        sessionStorage.clear()

        switch (e.target.name) {
            case "certificaciones":
                const found = menus1.find(element => element.name === e.target.id)
                setDetalle(found)
                sessionStorage.setItem("element", JSON.stringify(found))
                break;

            case "servicios":
                console.log('Ok servicios')
                const found2 = menus2.find(element => element.name === e.target.id)
                setDetalle(found2)
                sessionStorage.setItem("element", JSON.stringify(found2))
                break;

            case "consulta":
                console.log('Ok consulta')
                break;

            case "consulte":
                console.log('Ok consulte')
                break;

            default:
                break;
        }
    }



    return (
        <footer>
            <div>
                <h3>Certificaciones</h3>
                {
                    menus1.map((item) =>
                        <ul
                            id="droppin"
                            key={item.id}
                        >
                            <li
                                key={item.name}
                                onClick={(e) => handleClick(e)}
                                id={item.name}
                            >
                                <a
                                    onClick={(e) => handleClick(e)}
                                    id={item.name}
                                    href="/Certificaciones"
                                    className='enlace'
                                    key={item.id}
                                    name="certificaciones"
                                >
                                    {item.name}
                                </a>
                            </li>
                        </ul>
                    )
                }
            </div>
            <div>
                <h3>Servicios</h3>
                {
                    menus2.map((item) =>
                        <ul
                            id="droppin"
                            key={item.id}
                        >
                            <li
                                    key={item.name}
                                    id={item.name}
                                    onClick={(e) => handleClick(e)}
                                >
                                    <a
                                        onClick={(e) => handleClick(e)}
                                        id={item.name}
                                        href="/Servicios"
                                        className='enlace'
                                        key={item.id}
                                        name="servicios"
                                        >
                                            {item.name}
                                    </a>
                                </li>
                        </ul>
                    )
                }
            </div>
            <div>
                <h3>Consulta</h3>
                {
                    menus3.map((item) =>
                        <ul
                            id="droppin"
                            key={item.id}
                        >
                            <li >
                                <a
                                    id={item.name}
                                    onClick={(e) => handleClick(e)}
                                    href="/#">{item.name}</a>
                            </li>
                        </ul>
                    )
                }
            </div>
            <div>
                <h3>Cotice con nosotros</h3>
                {
                    menus4.map((item) =>
                        <ul
                            id="droppin"
                            key={item.id}
                        >
                            <li >
                                <a
                                    id={item.name}
                                    onClick={(e) => handleClick(e)}
                                    href="/#">{item.name}</a>
                            </li>
                        </ul>
                    )
                }
            </div>
            <div className='direccionesFooter'>
                <a target="_blank" href={inicio.urlDireccion} rel="noreferrer" > <PlaceIcon /> {inicio.direccion} </a>
                <a href='/'> <PhoneIcon /> {inicio.telefono1} </a>
                <a target="_blank" href={inicio.urlTelefono2} rel="noreferrer" > <PhonelinkRingIcon /> {inicio.telefono2} </a>
            </div>
        </footer>
    )
}

export default Footer