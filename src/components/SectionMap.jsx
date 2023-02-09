/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
//import of icons
import PhoneIcon from '@mui/icons-material/Phone';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import PlaceIcon from '@mui/icons-material/Place';
import { data } from '../Data/data';

const SectionMap = (props) => {



    const [datos] = data
    const { inicio } = datos

    const {
        iframeSource = '<iframe style="border:0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="600" height="450"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.1031257564459!2d-74.07115417079525!3d4.698177236385484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ad0cee0d40d%3A0x807318304484fc59!2sVtek!5e0!3m2!1ses!2sco!4v1652824027724!5m2!1ses!2sco"></iframe>'
    } = props;



    return (
        <div className='containerMap'>
            <div className='containerAddress'>
                <div
                    className='logoPrincipal'>
                    <img
                        src={`./images/${inicio.img.logoPrincipal}`}
                        alt={inicio.id}
                    />
                </div>
                <h2>Contáctanos</h2>
                <span>
                    <PlaceIcon />
                    {inicio.direccion}
                </span>
                <span>
                    <PhoneIcon />
                    {inicio.telefono1}
                </span>
                <span>
                    <PhonelinkRingIcon />
                    {inicio.telefono2}
                </span>
            </div>
            <div
                className="containerIframe"
                dangerouslySetInnerHTML={{ __html: iframeSource }}>

            </div>
        </div>
    )
}

export default SectionMap


