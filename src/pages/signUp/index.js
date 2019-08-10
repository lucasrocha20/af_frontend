import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/icons/logo.svg';

/* validação de campos */
const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido!')
    .required('O e-mail é obrigatório!'),
  name: Yup.string().required('O Nome é obrigatório!'),
  lastName: Yup.string().required('O sobrenome é obrigatório!'),
  mobile: Yup.string(),
  cpf: Yup.string().required('O CPF é obrigatório!'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres!')
    .required('A senha é obrigatória!'),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required()
          .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
      : field
  ),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Avalie Fácil" />
      <Form schema={schema} onSubmit={handleSubmit}>
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
