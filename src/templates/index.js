import React from 'react';
import DrawerComponent from '../components/organisms/drawer';
import HeaderComponent from '../components/organisms/header';

const TemplateWithDrawer = ({ children, valuesInfo }) => {
  return (
    <DrawerComponent valuesInfo={valuesInfo}>
      <HeaderComponent />
      {children}
    </DrawerComponent>
  );
};

export default TemplateWithDrawer;
