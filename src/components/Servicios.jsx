import React from 'react'
import { data } from '../Data/data'

const Servicios = () => {

    const [datos] = data;
    const { servicios } = datos;
    const dataCard = Object.values(servicios);




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
                                        <a href={item.url}>{item.tituloTarjeta}</a>
                                    </div>
                                            <p>{item.parrafo1}</p>
                                            <p>{item.parrafo2}</p>
                                    <div>
                                        <a className='enlaceVerMas' href={item.url}>Ver Mas</a>
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