import React from 'react'
import LayoutCotizacion from '../components/LayoutCotizacion'
import Swiper2 from '../components/Swiper2'
import LayoutSolicitud from '../components/LayoutSolicitud'
import LayoutContacta from '../components/LayoutContacta'


function Certificaciones  ({match})  {

    // console.log(match.params.id)

    const data = JSON.parse(localStorage.getItem("element", "value"))
    const {id, banner1} = data
    console.log(id, banner1)

    // desestructuracion datos de session storage
    const miniaturas = data.miniaturas
    const img = Object.values(miniaturas);


    return (
        <>
            <div className='contCertificaciones'>
                <div className='BannerPages1'>
                    <img key={id} src={require(`../assets/${banner1}`)} alt={banner1} />
                </div>
                <div className='BannerPages2'>
                    <img key={data.id} src={`../images/${data.banner2}`} alt={data.banner1} />
                </div>
                <div className='BannerPages3'>
                    <img key={data.id} src={`../images/${data.banner3}`} alt={data.banner1} />
                </div>
                <LayoutCotizacion />
                <div className='containerTextos'>
                    <h1 className='texto2'>{data.texto2}</h1>
                    <h5 className='texto3'>{data.texto3}</h5>
                    <h6 className='texto4'>{data.texto4}</h6>
                </div>
                {/* <h1>{match.params.id}</h1> */}
                <h5 className='tituloSeccion'>Productos que certificamos</h5>
                <div className='cardCertificaciones'>
                    {
                        img.map((item) =>
                            <div className='containerCard' key={item.id}>
                                <div className='containerImg'>
                                    <img src={`../images/${item.img}`} alt={item.img} />
                                </div>
                                <p>{item.text}</p>
                            </div>
                        )
                    }
                </div>
                <Swiper2 />
                <div className='containerBotones'>
                    <LayoutSolicitud />
                    <LayoutContacta />
                </div>
            </div>
        </>
    )
}

export default Certificaciones;