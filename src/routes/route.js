import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '../pages/_layouts/auth';
import NoAuthLayout from '../pages/_layouts/noAuth';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false;

  /* se o usuario não estiver logado e tentar acessar uma rota privada
  ele é redirecionado para a tela de login */
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  /* se ele estiver logado e tentar acessar uma rota não privada
  ele é direcionado para o dashboard */
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  /* define o layout a ser usado */
  const Layout = signed ? AuthLayout : NoAuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
