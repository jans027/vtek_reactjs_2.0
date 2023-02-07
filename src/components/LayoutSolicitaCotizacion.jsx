import React from 'react'
// import { Link } from 'react-router-dom'
import { data } from '../Data/data'


const LayoutSolicitaCotizacion = () => {

    const [datos] = data
    const { layoutSolicitaCotizacion } = datos



    return (
        <div className='layout1 layoutS-C-Servicios'>
            <div>
                <a
                    className='botonS-C-Servicios'
                    target="_blank"
                    href={layoutSolicitaCotizacion.enlaceWatsapp} rel="noreferrer"
                >
                    {layoutSolicitaCotizacion.boton}
                </a>
            </div>
        </div>
    )
}

export default LayoutSolicitaCotizacion