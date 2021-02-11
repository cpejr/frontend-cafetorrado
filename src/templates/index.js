import React from 'react';
import DrawerComponent from '../components/organisms/drawer';
import HeaderComponent from '../components/organisms/header';
import './styles.css';

const TemplateWithDrawer = ({ children, valuesInfo }) => {
  return (
    <div className="body">
      <DrawerComponent valuesInfo={valuesInfo} />

      <div className="page">
        <HeaderComponent />
        {children}
      </div>
    </div>
  );
};

export default TemplateWithDrawer;
