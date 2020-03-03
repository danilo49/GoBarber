import PropTypes from 'prop-types';
import React from 'react';

import { Wrapper } from './styles';
import Header from '~/components/Header';

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
