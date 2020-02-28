import PropTypes from 'prop-types';
import React from 'react';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  // Dashboard
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.protoTypes = {
  children: PropTypes.element.isRequired,
};
