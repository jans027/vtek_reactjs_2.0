import React, { useState } from 'react'
import { data } from '../Data/data'

const Servicios = () => {

    const [detalle, setDetalle] = useState([])


    const [datos] = data;
    const { servicios } = datos;
    const dataCard = Object.values(servicios);

    const handleClick = (e) => {
        localStorage.clear()

        console.log('Ok servicios')
        const found2 = dataCard.find(element => element.name === e.target.id)
        if (found2 !== 0) {
            console.log(found2, e.target)

        }
        setDetalle(found2)
        localStorage.setItem("element", JSON.stringify(found2))
    }





    return (
        <div className='servicios'>
            <div className="tituloServicios">
                <h2> SERVICIOS</h2>
                <h5>
                    Además trabajamos No acreditados en los servicios adicionales
                </h5>
            </div>
            <div className='sectionCards'>
                {
                    dataCard.map((item) =>
                        <div className='cardServicios' key={item.id}>
                            <div className='section'>
                                <img src={`./images/${item.img}`} alt={item.name} />
                                <div className='cardInformation'>
                                    <div>
                                        <a
                                            onClick={(e) => handleClick(e)}
                                            id={item.name}
                                            href='/Servicios'
                                            className='enlace'
                                            key={item.id}
                                            name="servicios"
                                        >
                                            {item.tituloTarjeta}</a>
                                    </div>
                                    <p>{item.parrafo1}</p>
                                    <p>{item.parrafo2}</p>
                                    <div>
                                        <a
                                            className='enlaceVerMas'
                                            onClick={(e) => handleClick(e)}
                                            id={item.name}
                                            href='/Servicios'
                                            key={item.id}
                                            name="servicios"
                                        >
                                            Ver Mas
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Servicios