import React, { useEffect, useState } from 'react';
import FormAuth from '../components/authorization/FormAuth';

import { useRegisterWithEmailAndPassword } from '../firebase';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [register, error] = useRegisterWithEmailAndPassword(email, password, name)
  
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <FormAuth
      title="Sign up"
      type="reg"
      email={ email }
      setEmail={ setEmail }
      password={ password }
      setPassword={ setPassword }
      name={ name }
      setName={ setName }
      submitFn={ register }
    />
  )
}

export default RegistrationPage;