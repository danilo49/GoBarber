import PropTypes from 'prop-types';
import React from 'react';

import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
  // Authentication
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.protoTypes = {
  children: PropTypes.element.isRequired,
};
