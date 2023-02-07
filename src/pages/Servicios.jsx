import React from 'react';
import BannerBeneficios from '../components/BannerBeneficios';
import BeneficiosyCobertura from '../components/BeneficiosyCobertura';
import LayoutCotizacion from '../components/LayoutCotizacion';
import LayoutSolicitaCotizacion from '../components/LayoutSolicitaCotizacion';





const Servicios = () => {

    // pidiendo datos al sessionStorage
    const data = JSON.parse(sessionStorage.getItem("element", "value"))

    // desestructuracion datos de session storage
    const miniaturas = data.miniaturas
    const datos = Object.values(miniaturas);




    return (
        <>
            <div className='contenedorServiciosL'>
                <div className='BannerPages1'>
                    <img key={data.id} src={`./images/${data.banner1}`} alt={data.banner1} />
                </div>
                <div className='BannerPages2'>
                    <img key={data.id} src={`./images/${data.banner2}`} alt={data.banner1} />
                </div>
                <div className='BannerPages3'>
                    <img key={data.id} src={`./images/${data.banner3}`} alt={data.banner1} />
                </div>
                <LayoutCotizacion />
                <section className='sectionCards'>
                    {
                        datos.map((item) =>
                            <div className='cards' key={item.id}>
                                <div className='containerImage'>
                                    <img
                                        className='imagenMiniatura'
                                        src={`./images/${item.img}`}
                                        alt={item.img}
                                    />
                                </div>
                                <div className='serviciosText'>
                                    <div className='containerText2'>
                                        <h2>{item.textTitulo}</h2>
                                        {item.textParrafo1.length === 0 ? '' : <p>{item.textParrafo1}</p>}
                                        {item.textParrafo2.length === 0 ? '' : <p>{item.textParrafo1}</p>}
                                        {item.textParrafo3.length === 0 ? '' : <p>{item.textParrafo1}</p>}

                                        {item.texAuxi1.length === 0 ? '' : <li>{item.texAuxi1}</li>}
                                        {item.texAuxi2.length === 0 ? '' : <li>{item.texAuxi2}</li>}
                                        {item.texAuxi3.length === 0 ? '' : <li>{item.texAuxi3}</li>}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </section>
                <LayoutSolicitaCotizacion/>
                <BannerBeneficios/>
                <BeneficiosyCobertura/>
            </div>
        </>
    )
}

export default Servicios