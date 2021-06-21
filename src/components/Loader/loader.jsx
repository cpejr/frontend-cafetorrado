import React, { useState, useEffect } from 'react';

import './loader.css';

const Loader = ({ status }) => (
  status ? (
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

export default Loader;
