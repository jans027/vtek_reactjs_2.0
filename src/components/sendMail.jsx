import React, { useRef, useState } from 'react'

const App = () => {

    // dinamic class name
    const [classAlert, setClassAlert] = useState('form_input')
    // dinamic placeholder
    const [placeholderText, setlPaceholderText] = useState('Ingresa tu Nombre')



    const [dataForm, setDataForm] = useState({
        user_name: "",
        user_email: "",
        user_phone: "",
        certificate_number: "",
    })

    const handleChange = ({ target: {value, name}}) =>
        setDataForm({...dataForm, [name]: value})

    const emailjs = "prueba"
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // regex input name
        const nameRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/;
        const isValidName = nameRegex.test(dataForm.user_name);

        // regex input email
        const emailRegex = /^(([^<>() [\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValidEmail = emailRegex.test(dataForm.user_email);

        // regex input phone
        const phoneRegex = /^[0-9]+$/;
        const isValidphone = phoneRegex.test(dataForm.user_phone)


        if (
            dataForm.user_name.trim() === "" ||
            dataForm.user_name === null ||
            dataForm.user_name.length === 0 ||
            isValidName !== true 
        ){
            console.log("nombre incorrecto")
            setClassAlert('class_1');
            setlPaceholderText('datos incorrectos')
        }else if (
            dataForm.user_email.trim() === "" ||
            dataForm.user_email === null ||
            dataForm.user_email.length === 0 ||
            isValidEmail !== true 
        ){
            console.log("email incorrecto")
        }else if(
            dataForm.user_phone.trim() === "" ||
            dataForm.user_phone === null ||
            dataForm.user_phone.length === 0 ||
            isValidphone !== true 
        ){
            console.log("phone incorrecto")
        }else if(
            dataForm.certificate_number.trim() === "" ||
            dataForm.certificate_number === null ||
            dataForm.certificate_number.length === 0 ||
            isValidphone !== true 
        ){
            console.log("phone incorrecto")
        }else{
            
            console.log(dataForm)
            emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                alert('message sent successfully...');
                console.log(result.text);
            },
                (error) => {
                    console.log(error.text);
                });
        }


        
    };


    return (
        <div className='cont_form_mail'>
            <form ref={form} onSubmit={sendEmail}>
                
                <label className='form_label'>Nombre</label>
                <input onChange={handleChange} className={classAlert} type="text" placeholder={placeholderText} name="user_name" />

                <label className='form_label'>Correo</label>
                <input onChange={handleChange} className='form_input' type="email" placeholder='Ingresa un correo valido' name="user_email"  />

                <label className='form_label'>Telefono</label>
                <input onChange={handleChange} className='form_input' type="tel" placeholder='Ingresa tu telefono' name="user_phone"  />

                <label className='form_label'>Numero del Certificado</label>
                <input onChange={handleChange} className='form_input' type="tel" placeholder='Ingresa el numero del certificado' name="certificate_number"  />

                <input className='form_btn' type="submit" value="Enviar" />
            </form>
        </div>
    );
}
export default App;

{/* <div className={`class_0 ${condition_1 ? 'class_1' : 'class_2'}${condition_2 ? 'class_3' : ''}`} /> // => "class_0 class_1" */}
