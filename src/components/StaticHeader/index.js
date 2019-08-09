import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/icons/logo.svg';

import { Container, Navigation, Spacer } from './styles';

export default function StaticHeader() {
  return (
    <header>
      <Container>
        <h1>
          <Link to="/">
            <img src={logo} alt="Avalie Fácil" />
          </Link>
        </h1>
        <Spacer />
        <Navigation>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signin">Entrar</Link>
            </li>
          </ul>
        </Navigation>
      </Container>
    </header>
  );
}
