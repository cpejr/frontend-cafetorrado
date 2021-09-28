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
        <h1>Estabelecendo Conexão...</h1>
      </div>
    </div>
  ) : (
    <div />
  )
);

export default Loader;
