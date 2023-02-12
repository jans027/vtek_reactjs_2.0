/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { data } from '../Data/data';

const BotonWhatsapp = () => {

    const [datos] = data
    const dataBtn = datos.inicio
    // console.log(dataBtn)

    return (
        <div className='container'>
            <a
                className='floatingButton'
                href={dataBtn.urlTelefono2}
                target='_blank' 
                rel="noreferrer"
            >
                <img
                    // className='imgBanner'
                    src={`./images/${dataBtn.imgBotonWhatsapp}`}
                    alt={datos.imgBotonWhatsapp}
                />
            </a>
        </div>
    );
};



export default BotonWhatsapp;
