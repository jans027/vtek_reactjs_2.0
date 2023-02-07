import React from 'react'
import { data } from '../Data/data'

const SeccionCertificaciones = () => {

    const [datos] = data
    const { certificaciones } = datos
    const menus1 = Object.values(certificaciones)
    // console.log(menus1)


    return (
        <div className='seccionCertificaciones'>
            <h2> CERTIFICACIONES </h2>
            <p> Certificamos productos </p>
            <div className='cardCertificaciones'>
                {
                    menus1.map((item) =>
                    <div key={item.id}>
                            <a href={item.url}>
                                    <img src={`./images/${item.img}`} alt={item.name} />
                                    <p>{item.name}</p>
                            </a>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default SeccionCertificaciones