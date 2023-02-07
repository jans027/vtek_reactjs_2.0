import React from 'react'
import { data } from '../Data/data';


const LayoutContacta = () => {

    const [datos] = data


    return (
        <div>
            <div className='layoutContacta'>
            <a href={datos.urlTelefono2}  target="_blank" rel="noreferrer">
                        Contacta un asesor</a>
            </div>
        </div>
    )
}

export default LayoutContacta