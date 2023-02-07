import React from 'react'
import { data } from '../Data/data'

const BannerBeneficios = () => {

    const [datos] = data
    const banners = datos.inicio.bannerBeneficios
    // console.log(banners)


    return (
        <>
            <div className='containerBeneficios'>
                <div className='banner1'>
                    <img
                    className='imgBanner'  
                    src={`./images/${banners.banner1}`} 
                    alt={banners.banner1} 
                    />
                </div>
                <div className='banner2'>
                    <img
                    className='imgBanner'  
                    src={`./images/${banners.banner2}`} 
                    alt={banners.banner2} 
                    />
                </div>
                <div className='banner3'>
                    <img
                    className='imgBanner'  
                    src={`./images/${banners.banner3}`} 
                    alt={banners.banner3} 
                    />
                </div>
            </div>
        </>
    )
}

export default BannerBeneficios