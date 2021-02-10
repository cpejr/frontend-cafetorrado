import React from 'react';
import DrawerComponent from '../components/organisms/drawer';
// import HeaderComponent from '../components/organisms/header';
import Header from '../components/Header/Header';
import './styles.css';

const TemplateWithDrawer = ({ children, valuesInfo }) => {
  return (
    <div className="body">
      <DrawerComponent valuesInfo={valuesInfo} />

      <div className="page">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default TemplateWithDrawer;
