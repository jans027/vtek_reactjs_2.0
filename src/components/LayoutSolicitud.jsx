import React from 'react'
import { data } from '../Data/data'

const LayoutSolicitud = () => {

    const [datos] = data
    return (
        <div>
            <div className='layoutSolicitud'>
                <a href= {datos.urlProcesos} target="_blank" rel="noreferrer">
                    solicitud en línea</a>
            </div>
        </div>
    )
}

export default LayoutSolicitud
