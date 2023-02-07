/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { data } from '../Data/data';
import ModalForm from './ModalForm';
// pdf
import GV_MC_01_V7_Términos_y_condiciones from '../documents/GV_MC_01_V7_Términos_y_condiciones.pdf'
// GV-MC-01-V7-Términos-y-condiciones.pdf

const BasicMenu = () => {

    const [datos] = data
    const { certificaciones, servicios, consulta, cotice } = datos
    const menus1 = Object.values(certificaciones)
    const menus2 = Object.values(servicios)
    // const menus3 = Object.values(consulta)
    const menus4 = Object.values(cotice)
    // console.log(menus3)

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
        <div className='menuBarraNav'>
            <div id="droppin-wrapper" className="material bounce">
                <a href="/" className='selector'>Inicio</a>
            </div>
            <div id="droppin-wrapper" className="material bounce">
                <p className='selector'>Certificaciones</p>
                <div className="hidden">
                    <React.Fragment key={datos.certificaciones}>
                        {
                            menus1.map((item) =>
                                <ul
                                    id="droppin"
                                    value={item.name}
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
                    </React.Fragment>
                </div>
            </div>
            <div id="droppin-wrapper" className="material bounce">
                <p className='selector'>Servicios</p>
                <div className="hidden">
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
            </div>
            <div id="droppin-wrapper" className="material bounce">
                <p className='selector'>Consulta</p>
                <div className="hidden">
                    <ul
                        id="droppin"
                    >
                        <li><ModalForm /></li>
                        <li>
                            <a
                                href={GV_MC_01_V7_Términos_y_condiciones}
                                target="_blank" 
                                rel="noreferrer"
                            >
                                prueba
                            </a>
                        </li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div id="droppin-wrapper" className="material bounce">
                <p className='selector'>Cotice Con Nosotros</p>
                <div className="hidden">
                    {
                        menus4.map((item) =>
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
                                        href={item.url}>{item.name}</a>
                                </li>
                            </ul>
                        )
                    }
                </div>
            </div>
            <div id="droppin-wrapper" className="material bounce">
                <a href="/" className='selector'>Iniciar Sesión</a>
            </div>
        </div>
    );
}

export default BasicMenu