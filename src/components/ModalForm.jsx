/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import App from './sendMail';
import { data } from '../Data/data';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide transitionDuration="30000" direction="down" ref={ref} {...props} />;
});

const ModalForm = () => {

    const [datos] = data
    const image = datos.inicio.imgVentanaModal;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <a className='enlace' variant="outlined" onClick={handleClickOpen}>
                valide su certificado
            </a>
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <DialogTitle onClick={handleClose}>X</DialogTitle>
                <div>
                    <div>
                        <img
                            className='imgBanner'
                            src={`./images/${image}`}
                            alt={image}
                        />
                    </div>
                    <App />
                </div>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default ModalForm