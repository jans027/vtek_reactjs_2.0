import React from 'react'
// import MenuIcon from '@mui/icons-material/Menu';
import MenuDrawer from './MenuDrawer';

const ResponsiveNavBar = () => {


    const handleClick = (e) => {
        // console.log('hamburguer menu', e.target.id)
    }

    return (
        <div
            onClick={(e) => handleClick(e)}
        >
            <MenuDrawer />
        </div>
    )
}

export default ResponsiveNavBar