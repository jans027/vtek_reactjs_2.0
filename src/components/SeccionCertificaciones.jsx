import React, { useState } from 'react'
import { data } from '../Data/data'

const SeccionCertificaciones = () => {

    const [detalle, setDetalle] = useState([])


    const [datos] = data
    const { certificaciones } = datos
    const menus1 = Object.values(certificaciones)
    // console.log(menus1)

    const handleClick = (e) => {

        sessionStorage.clear()
        const found = menus1.find(element => element.name === e.target.id)
        setDetalle(found)
        sessionStorage.setItem("element", JSON.stringify(found))
    }


    return (
        <div className='seccionCertificaciones'>
            <h2> CERTIFICACIONES </h2>
            <p> Certificamos productos </p>
            <div className='cardCertificaciones'>
                {
                    menus1.map((item) =>
                        <div key={item.id}>
                            <a
                                onClick={(e) => handleClick(e)}
                                id={item.name}
                                href="/Certificaciones"
                                className='enlace'
                                key={item.id}
                                name="certificaciones"
                            >
                                <img
                                    src={`./images/${item.img}`}
                                    alt={item.name}
                                    id={item.name}
                                />
                                <p 
                                    id={item.name}
                                >
                                    {item.name}
                                </p>
                            </a>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SeccionCertificaciones