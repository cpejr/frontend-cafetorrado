/*eslint-disable*/
import React from 'react';
import NewDrawer from '../components/Drawer/NewDrawer';
import { useToggle } from '../Hooks';
import Header from '../components/Header/Header';
import './styles.css';

const TemplateWithDrawer = ({ children, valuesInfo }) => {
  const [open, toggle] = useToggle(true);
  return (
    <div className="body">
      <NewDrawer valuesInfo={valuesInfo} open={open} toggle={toggle} />

      <div className={open ? 'page' : 'page-close page'}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default TemplateWithDrawer;
