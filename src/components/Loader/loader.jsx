import React, { useState, useEffect } from 'react';

import './loader.css';

const setter = { function: null };

function setVisibility(type) {
  setter.function(type);
}
const Loader = () => {
  const [visible, isVisible] = useState(true);
  setter.function = isVisible;
  setTimeout(() => {
    console.log(setter.function);
  }, 1000);
  return (
    visible ? (
      <div>
        <div className="loader">
          <div />
          <div />
        </div>
        <div className="loader-text">
          <h3>Estabelecendo Conexão...</h3>
        </div>
      </div>
    ) : (
      <div />
    )
  );
};

export default Loader;
