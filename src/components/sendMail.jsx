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
        <div>
            <h1>Contact Form</h1>
            <form ref={form} onSubmit={sendEmail}>
                <label>Nombre</label>
                <input type="text" name="user_name" />

                <label>Correo</label>
                <input type="email" name="user_email" />

                <label>Telefono</label>
                <input type="tel" name="user_phone" />

                <label>Numero del Certificado</label>
                <input type="tel" name="certificate_number" />

                <input type="submit" value="Send" />
            </form>
        </div>
    );
}
export default App;


