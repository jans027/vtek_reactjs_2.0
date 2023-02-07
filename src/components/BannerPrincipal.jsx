import React from 'react'
import { data } from '../Data/data'

const BannerPrincipal = () => {

    const [datos] = data
    const { esloganBanner } = datos



    return (
        <div className='containerPrincipalBaner1' key={esloganBanner.id}>
            <div className='contenidoBanner1'>
                <p className='tituloBanner1'>{esloganBanner.texto1}</p>
                <p className='subtituloBanner1'>{esloganBanner.texto2}</p>
                <p className='parrafoBanner1'>
                    {esloganBanner.texto3}
                    <span>{esloganBanner.texto4}</span>
                    {esloganBanner.texto5}
                </p>
            </div>
        </div>
    )
}

export default BannerPrincipal