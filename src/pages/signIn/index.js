import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';
import logo from '../../assets/icons/logo.svg';

import { signInRequest } from '../../store/modules/auth/actions';

/* validação de campos */
const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido!')
    .required('O e-mail é obrigatório!'),
  password: Yup.string()
    .min(6)
    .required('A senha é obrigatória!'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Avalie Fácil" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input name="password" type="password" placeholder="Digite sua senha" />

        <button type="submit">Acessar</button>
        <Link to="/signup">Criar Conta</Link>
      </Form>
    </>
  );
}
