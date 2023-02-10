import React, { useRef } from 'react'

const App = () => {

    const emailjs = "prueba"
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                alert('message sent successfully...');
                console.log(result.text);
            },
                (error) => {
                    console.log(error.text);
                });
    };
    return (
        <div className='cont_form_mail'>
            <form ref={form} onSubmit={sendEmail}>
                
                <label className='form_label'>Nombre</label>
                <input className='form_input' type="text" placeholder='Ingresa tu Nombre' name="user_name"  />

                <label className='form_label'>Correo</label>
                <input className='form_input' type="email" placeholder='Ingresa un correo valido' name="user_email" />

                <label className='form_label'>Telefono</label>
                <input className='form_input' type="tel" placeholder='Ingresa tu telefono' name="user_phone" />

                <label className='form_label'>Numero del Certificado</label>
                <input className='form_input' type="tel" placeholder='Ingresa el numero del certificado' name="certificate_number" />

                <input className='form_btn' type="submit" value="Enviar" />
            </form>
        </div>
    );
}
export default App;


