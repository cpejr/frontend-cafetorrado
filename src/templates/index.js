import React from 'react';
import DrawerComponent from '../components/organisms/drawer';

const TemplateWithDrawer = ({ children, valuesInfo }) => {
  return <DrawerComponent valuesInfo={valuesInfo}>{children}</DrawerComponent>;
};

export default TemplateWithDrawer;
