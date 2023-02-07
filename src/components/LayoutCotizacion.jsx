import React from 'react'
// import { Link } from 'react-router-dom'
import { data } from '../Data/data'


const LayoutCotizacion = () => {

    const [datos] = data
    const { layoutCotizacion } = datos



    return (
        <div className='layout1'>
            <div>
                <h4>{layoutCotizacion.titulo1}</h4>
                <p>{layoutCotizacion.SubTitulo}</p>
            </div>
            <div>
                <a
                    target="_blank"
                    href={layoutCotizacion.enlaceWatsapp} rel="noreferrer"
                >
                    {layoutCotizacion.boton}
                </a>
            </div>
        </div>
    )
}

export default LayoutCotizacion