import React, { useState, useEffect } from 'react';
import NewDrawer from '../components/Drawer/NewDrawer';
import Header from '../components/Header/Header';
import './styles.css';

const TemplateWithDrawer = ({ children, valuesInfo }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.drawerIsOpen = open;
    window.dispatchEvent(new Event('drawer-toggle', { bubbles: true }));
  }, [open]);

  return (
    <div className="body">
      <NewDrawer
        valuesInfo={valuesInfo}
        open={open}
        toggle={() => setOpen(!open)}
      />

      <div className={open ? 'page' : 'page-close page'}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default TemplateWithDrawer;
