import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/icons/logo.svg';

export default function signUp() {
  return (
    <>
      <img src={logo} alt="Avalie Fácil" />
      <Form>
        <Input name="name" type="text" placeholder="Digite seu Nome" />
        <Input name="lastName" type="text" placeholder="Digite seu Sobrenome" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input name="mobile" type="text" placeholder="Digite seu Celular" />
        <Input name="cpf" type="text" placeholder="Digite seu CPF" />
        <hr />
        <br />
        <Input name="password" type="text" placeholder="Digite sua Senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme sua Senha"
        />
        <button type="submit">Acessar</button>
        <Link to="/">Já Possuo uma Conta</Link>
      </Form>
    </>
  );
}
