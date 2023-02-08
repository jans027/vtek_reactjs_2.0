import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from 'react-modern-drawer'
//import styles 👇
import 'react-modern-drawer/dist/index.css'
import SimpleAccordion from './SimpleAccordion';
import { data } from '../Data/data';

const MenuDrawer = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    




    return (
        <>
            <button
                className='responsiveNav'
                onClick={toggleDrawer}><MenuIcon />
            </button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='MenuDrawer'
                size='300px'
            >
                <div className='section1'>
                    <button
                        className='CloseIconDrawer'
                        onClick={toggleDrawer}><CloseIcon />
                    </button>
                </div>
                <div className="section2">
                    <a href="/">Inicio</a>
                </div>
                <div className="section3">
                    <SimpleAccordion />
                </div>
            </Drawer>
        </>
    )
}

export default MenuDrawer