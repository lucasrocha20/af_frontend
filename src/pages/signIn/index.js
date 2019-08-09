import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import logo from '../../assets/icons/logo.svg';

export default function signIn() {
  return (
    <>
      <img src={logo} alt="Avalie Fácil" />
      <Form>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input name="password" type="password" placeholder="Digite sua senha" />

        <button type="submit">Acessar</button>
        <Link to="/signup">Criar Conta</Link>
      </Form>
    </>
  );
}
