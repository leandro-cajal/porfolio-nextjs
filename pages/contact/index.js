// icons
import { BsArrowRight } from 'react-icons/bs';

// framer
import { motion } from 'framer-motion'

// variants
import { fadeIn } from '../../variants'

// email js
import emailjs from 'emailjs-com';

// hooks
import { useState } from 'react';

//toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//language context
import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';


const Contact = () => {


  const { selectedLanguage } = useContext(LanguageContext);

  const initialFields = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFields);

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : (selectedLanguage === 'español' ? "El nombre es requerido." : "Name is required.");
    tempErrors.email = formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]+$/) ? "" : (selectedLanguage === 'español' ? "El email no es válido." : "Email is not valid.");
    tempErrors.subject = formData.subject ? "" : (selectedLanguage === 'español' ? "El asunto es requerido." : "Subject is required.");
    tempErrors.message = formData.message ? "" : (selectedLanguage === 'español' ? "El mensaje es requerido." : "Message is required.");
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleChange = e => {
    const { name, value } = e.target;

    // Copia el estado actual de formData
    const updatedFormData = { ...formData, [name]: value };

    // Validar el campo que se está editando
    let updatedErrors = { ...errors };
    switch (name) {
      case 'name':
        updatedErrors.name = value.trim() ? "" : (selectedLanguage === 'español' ? "El nombre es requerido." : "Name is required.");
        break;
      case 'email':
        updatedErrors.email = value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]+$/) ? "" : (selectedLanguage === 'español' ? "El email no es válido." : "Email is not valid.");
        break;
      case 'subject':
        updatedErrors.subject = value.trim() ? "" : (selectedLanguage === 'español' ? "El asunto es requerido." : "Subject is required.");
        break;
      case 'message':
        updatedErrors.message = value.trim() ? "" : (selectedLanguage === 'español' ? "El mensaje es requerido." : "Message is required.");
        break;
      default:
        break;
    }

    // Actualizar el estado con los nuevos datos del formulario y errores
    setFormData(updatedFormData);
    setErrors(updatedErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs
        .send(
          'service_ezbo7vj',
          'template_n4du35t',
          formData,
          'vMOfCyO-7GsZi-3RA'
        )
        .then(
          (response) => {
            toast.dark(selectedLanguage === 'english' ?'Message sent!' : '¡Mensaje enviado!'  , {
              theme: 'dark',
            });
            setFormData(initialFields); // Resetear los campos del formulario
            setErrors({ ...initialFields }); // Limpiar los errores
          },
          (error) => {
            toast.error(selectedLanguage === 'español' ? 'No se pudo enviar el mensaje, por favor intente de nuevo.' : 'Failed to send the message, please try again.');
          }
        );
    }
  };

  return (
    <div className='h-full bg-primary/30'>
      <ToastContainer />
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: 'easeInOut' }}
            className='h2 text-center mb-12'>
            {selectedLanguage === 'español' ? 'Conectemos.' : 'Let\'s connect.'}
          </motion.h2>
          <motion.form
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: 'easeInOut' }}
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            onSubmit={handleSubmit}>
            <div className='flex gap-x-6 w-full'>
              <div className='relative w-full'>
                <input
                  type='text'
                  placeholder={selectedLanguage === 'español' ? 'Nombre' : 'Name'}
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='input relative'
                />
                {errors.name && <span className="text-red-500 absolute -top-5 right-2 font-light text-sm">{errors.name}</span>}
              </div>
              <div className='relative w-full'>
                <input
                  type='text'
                  placeholder={selectedLanguage === 'español' ? 'Correo electrónico' : 'Email'}
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='input relative'
                />
                {errors.email && <span className="text-red-500 absolute -top-5 right-2 font-light text-sm">{errors.email}</span>}
              </div>
            </div>
            <div className='relative w-full'>
              <input
                type='text'
                placeholder={selectedLanguage === 'español' ? 'Asunto' : 'Subject'}
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                className='input relative'
              />
              {errors.subject && <span className="text-red-500 absolute -top-5 right-2 font-light text-sm">{errors.subject}</span>}
            </div>
            <div className='w-full relative'>
              <textarea
                placeholder={selectedLanguage === 'español' ? 'Mensaje' : 'Message'}
                name='message'
                value={formData.message}
                onChange={handleChange}
                className='textarea relative'
              />
              {errors.message && <span className="text-red-500 absolute -top-5 right-2 font-light text-sm">{errors.message}</span>}
            </div>
            <button type='submit' className='btn relative rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='absolute z-10 group-hover:opacity-0 opacity-100 group-hover:translate-y-[200%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500'>
                {selectedLanguage === 'español' ? 'Hablemos' : 'Let\'s talk'}
              </span>
              <BsArrowRight className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:translate-y-[65%] group-hover:opacity-100 transition-all duration-500 text-[22px]' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;