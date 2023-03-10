import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { data } from '../Data/data';
// import documents pdf & docx
import GV_MC_01_V7_Términos_y_condiciones from '../documents/GV_MC_01_V7_Términos_y_condiciones.pdf'
import GV_FC_06_V1_Quejas_y_apelaciones from '../documents/GV_FC_06_V1_Quejas_y_apelaciones.docx'
import GV_PC_03_V2_Quejas_y_apelaciones from '../documents/GV_PC_03_V2_Quejas_y_apelaciones.pdf'
import ModalForm from './ModalForm';



export default function SimpleAccordion() {

    const [datos] = data
    const { certificaciones, servicios, consulta, cotice } = datos
    const menus1 = Object.values(certificaciones)
    const menus2 = Object.values(servicios)
    // const menus3 = Object.values(consulta)
    const menus4 = Object.values(cotice)
    // console.log(menus2)

    const [detalle, setDetalle] = React.useState([])


    const handleClick = (e) => {

        sessionStorage.clear()

        switch (e.target.name) {
            case "certificaciones":
                const found = menus1.find(element => element.name === e.target.id)
                setDetalle(found)
                sessionStorage.setItem("element", JSON.stringify(found))
                break;

            case "servicios":
                console.log('Ok servicios')
                const found2 = menus2.find(element => element.name === e.target.id)
                setDetalle(found2)
                sessionStorage.setItem("element", JSON.stringify(found2))
                break;

            case "consulta":
                console.log('Ok consulta')
                break;

            case "consulte":
                console.log('Ok consulte')
                break;

            default:
                break;
        }
    }

    // colapsamos el menu al dar click a otro
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    return (
        <div>
            <Accordion
                className='accordionMenu'
                expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Certificaciones</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {
                            menus1.map((item) =>
                                <ul
                                    id="droppin"
                                    value={item.name}
                                    key={item.id}
                                >
                                    <li key={item.name}
                                        // onClick={(e) => handleClick(e)}
                                        id={item.name}
                                    >
                                        <a
                                            onClick={(e) => handleClick(e)}
                                            id={item.name}
                                            href='/Certificaciones'
                                            key={item.id}
                                            name="certificaciones"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                </ul>
                            )
                        }
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                className='accordionMenu'
                expanded={expanded === 'panel2'} onChange={handleChange('panel2')}

            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Servicios</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {
                            menus2.map((item) =>
                                <ul
                                    id="droppin"
                                    key={item.id}
                                >
                                    <li
                                        id={item.name}
                                        key={item.name}
                                    // onClick={(e) => handleClick(e)}
                                    >
                                        <a
                                            onClick={(e) => handleClick(e)}
                                            id={item.name}
                                            href='/Servicios'
                                            key={item.id}
                                            name="servicios"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                </ul>
                            )
                        }
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                className='accordionMenu'
                expanded={expanded === 'panel3'} onChange={handleChange('panel3')}

            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Consulta</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul id="droppin">
                            <li><ModalForm /></li>
                            <li>
                                <a
                                    href={GV_MC_01_V7_Términos_y_condiciones}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Terminos y condiciones
                                </a>
                            </li>
                            <li>
                                <a
                                    href={GV_FC_06_V1_Quejas_y_apelaciones}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Formato quejas y apelaciones
                                </a>
                            </li>
                            <li>
                                <a
                                    href={GV_PC_03_V2_Quejas_y_apelaciones}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Procedimiento quejas y apelaciones
                                </a>
                            </li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                className='accordionMenu'
                expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Cotice Con Nosotros</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {
                            menus4.map((item) =>
                                <ul
                                    id="droppin"
                                    key={item.id}
                                >
                                    <li
                                        id={item.name}
                                        onClick={(e) => handleClick(e)}
                                    >
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            key={item.id}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                </ul>
                            )
                        }
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
