import React from 'react'
import BannerPrincipal from './BannerPrincipal'
import LayoutContacta from './LayoutContacta'
import LayoutCotizacion from './LayoutCotizacion'
import LayoutSolicitud from './LayoutSolicitud'
import SeccionCertificaciones from './SeccionCertificaciones'
import SectionMap from './SectionMap'
import Servicios from './Servicios'
import SliderBaners from './SliderBaners'
import Swiper2 from './Swiper2'

const LandingPage = () => {
    return (
        <div>
            <BannerPrincipal/>
            <LayoutCotizacion />
            <SeccionCertificaciones/>
            <Swiper2/>
            <LayoutSolicitud/>
            <LayoutContacta/>
            <Servicios/>
            <SliderBaners/>
            <SectionMap/>
        </div>
    )
}

export default LandingPage