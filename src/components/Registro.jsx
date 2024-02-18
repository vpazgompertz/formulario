import React from 'react';
import SocialButton from './SocialButton'; 
import Formulario from './Formulario';
import Alert from './Alert';

const Registro = ({ registration }) => {
  return (
    <>
      <h1 className='title'>Crear una cuenta</h1>
      <SocialButton icon={'fa fa-facebook'} />
      <SocialButton icon={'fa fa-instagram'} />
      <SocialButton icon={'fa fa-linkedin'} />
      <Formulario registration={registration} />
    </>
  );
}

export default Registro;



