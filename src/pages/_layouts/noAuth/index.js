import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

export default function NoAuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

NoAuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
