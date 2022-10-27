import React, { useEffect, useState } from 'react';
import FormAuth from '../components/authorization/FormAuth';

import { useLogInWithEmailAndPassword } from '../firebase';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, error] = useLogInWithEmailAndPassword(email, password)


  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <FormAuth
      title="Log in"
      type="log"
      email={ email }
      setEmail={ setEmail }
      password={ password }
      setPassword={ setPassword }
      submitFn={ login }
    />
  )
}

export default LoginPage;