import React from 'react'
import { data } from '../Data/data'

const BeneficiosyCobertura = () => {

    const [datos] = data
    const beneficios = datos.beneficiosyCobertura


    const {miniatura} = beneficios
    const img = Object.values(miniatura);
    // console.log(img)


    return (
        <div className='contBeneficios'>
            <h2 className='firstText'>{beneficios.TexPrincipal}</h2>
            <ul className='listBeneficios'>
                <li>{beneficios.texAuxi1}</li>
                <li>{beneficios.texAuxi2}</li>
                <li>{beneficios.texAuxi3}</li>
                <li>{beneficios.texAuxi4}</li>
            </ul>
            <div className='contCards'>
                {
                    img.map((item) =>
                    <div 
                    className='cardsBeneficios'
                    key={item.id}
                    >
                        <div className='contImage'>
                                <img 
                                key={item.name}
                                src={`./images/${item.img}`} 
                                alt={item.name}
                                />
                        </div>
                        <div className='textImage'>
                            <span>{item.text1}</span>
                        </div>
                    </div>
                        
                    )
                }
            </div>
        </div>
    )
}

export default BeneficiosyCobertura