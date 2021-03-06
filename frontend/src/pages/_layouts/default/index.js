import PropTypes from 'prop-types';
import React from 'react';

import Header from '~/components/Header';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  // Dashboard
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.protoTypes = {
  children: PropTypes.element.isRequired,
};
