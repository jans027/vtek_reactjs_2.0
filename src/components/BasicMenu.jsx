/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { data } from '../Data/data';
import ModalForm from './ModalForm';
// import documents pdf & docx
import GV_MC_01_V7_Términos_y_condiciones from '../documents/GV_MC_01_V7_Términos_y_condiciones.pdf'
import GV_FC_06_V1_Quejas_y_apelaciones from '../documents/GV_FC_06_V1_Quejas_y_apelaciones.docx'
import GV_PC_03_V2_Quejas_y_apelaciones from '../documents/GV_PC_03_V2_Quejas_y_apelaciones.pdf'




const BasicMenu = () => {

    const [datos] = data
    const { certificaciones, servicios,  cotice } = datos
    const menus1 = Object.values(certificaciones)
    const menus2 = Object.values(servicios)
    // const menus3 = Object.values(consulta)
    const menus4 = Object.values(cotice)
    // console.log(menus3)

    const [detalle, setDetalle] = useState([])
    // console.log(consulta)

    // desetructuracion profunda de objeto
    // const [valide, procedimiento, formato, terminos] = menus3
    // console.log(procedimiento.url)





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
                    <ul id="droppin">
                        <li><ModalForm /></li>
                        <li>
                            <a
                                href={GV_MC_01_V7_Términos_y_condiciones}
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Terminos y condiciones
                            </a>
                        </li>
                        <li>
                        <a
                                href={GV_FC_06_V1_Quejas_y_apelaciones}
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Formato quejas y apelaciones
                            </a>
                        </li>
                        <li>
                        <a
                                href={GV_PC_03_V2_Quejas_y_apelaciones}
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Procedimiento quejas y apelaciones
                            </a>
                        </li>
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