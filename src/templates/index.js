import React from 'react';
import DrawerComponent from '../Components/organisms/drawer';

const TemplateWithDrawer = ({ children, valuesInfo }) => {
  return <DrawerComponent valuesInfo={valuesInfo}>{children}</DrawerComponent>;
};

export default TemplateWithDrawer;
