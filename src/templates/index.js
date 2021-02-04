import React from 'react';
import PropTypes from 'prop-types';
import DrawerComponent from '../components/organisms/drawer';

const TemplateWithDrawer = ({ children }) => {
  return <DrawerComponent>{children}</DrawerComponent>;
};

export default TemplateWithDrawer;
