import React from 'react';
import DrawerComponent from '../components/organisms/drawer';
// import HeaderComponent from '../components/organisms/header';
import { useToggle } from '../hooks';
import Header from '../components/Header/Header';
import './styles.css';

const TemplateWithDrawer = ({ children, valuesInfo }) => {
  const [open, toggle] = useToggle(true);
  return (
    <div className="body">
      <DrawerComponent valuesInfo={valuesInfo} open={open} toggle={toggle} />

      <div className={open ? 'page' : 'page-close page'}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default TemplateWithDrawer;
