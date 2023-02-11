import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';





const SendMail = () => {

    // dinamic class name
    const [classAlert, setClassAlert] = useState('form_input')
    // dinamic placeholder
    const [placeholderText, setPlaceholderText] = useState(true)
    // console.log(placeholderText)



    const [dataForm, setDataForm] = useState({
        name: "",
        email: "",
        phone: "",
        certificate: "",
    })

    const handleChange = ({ target: { value, name } }) =>
        setDataForm({ ...dataForm, [name]: value })

    const form = useRef();
    // console.log(form)

    const sendEmail = (event) => {
        event.preventDefault();

        // regex input name
        const nameRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/;
        const isValidName = nameRegex.test(dataForm.name);

        // regex input email
        const emailRegex = /^(([^<>() [\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValidEmail = emailRegex.test(dataForm.email);

        // regex input phone
        const phoneRegex = /^[0-9]+$/;
        const isValidphone = phoneRegex.test(dataForm.phone)


        if (
            dataForm.name.trim() === "" ||
            dataForm.name === null ||
            dataForm.name.length === 0 ||
            isValidName !== true
        ) {
            setClassAlert('class_1');
            setPlaceholderText(false)
        } else if (
            dataForm.email.trim() === "" ||
            dataForm.email === null ||
            dataForm.email.length === 0 ||
            isValidEmail !== true
        ) {
            setClassAlert('class_1');

        } else if (
            dataForm.phone.trim() === "" ||
            dataForm.phone === null ||
            dataForm.phone.length === 0 ||
            isValidphone !== true
        ) {
            setClassAlert('class_1');

        } else if (
            dataForm.certificate.trim() === "" ||
            dataForm.certificate === null ||
            dataForm.certificate.length === 0 ||
            isValidphone !== true
        ) {
            setClassAlert('class_1');

        } else {
            setClassAlert('form_input');
            // console.log(event.target)
            emailjs.sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_PUBLIC_KEY
            )
                .then((result) => {
                    console.log(result.text);
                    // window.location.replace('');
                    // window.location.reload(true);
                    alert('Mensaje enviado con exito...');
                    alert.confirm(window.location.reload(true))
                },
                    (error) => {
                        alert('Intenta mas tarde...');
                        alert.confirm(window.location.reload(true))
                    });
        }

    };


    return (
        <div className='cont_form_mail'>
            <form ref={form} onSubmit={sendEmail}>

                <label className='form_label'>Nombre</label>
                <input
                    onChange={handleChange}
                    className={classAlert}
                    type="text"
                    placeholder={placeholderText === true ? 'Ingresa tu Nombre' : 'Datos incorrectos'}
                    name="name"
                    id="name"
                />

                <label className='form_label'>Correo</label>
                <input
                    onChange={handleChange}
                    className={classAlert}
                    type="email"
                    placeholder={placeholderText === true ? 'Ingresa un correo valido' : 'Datos incorrectos'}
                    name="email"
                    id="email"
                />

                <label className='form_label'>Telefono</label>
                <input
                    onChange={handleChange}
                    className={classAlert}
                    type="tel"
                    placeholder={placeholderText === true ? 'Ingresa tu telefono' : 'Datos incorrectos'}
                    name="phone"
                    id="phone"
                />

                <label className='form_label'>Numero del Certificado</label>
                <input
                    onChange={handleChange}
                    className={classAlert}
                    type="tel"
                    placeholder={placeholderText === true ? 'Ingresa el numero del certificado' : 'Datos incorrectos'}
                    name="certificate"
                    id="certificate"
                />

                <input
                    className='form_btn'
                    type="submit"
                    value="Enviar"
                />
            </form>
        </div>
    );
}
export default SendMail;



