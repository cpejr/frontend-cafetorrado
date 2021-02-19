import { React, useState } from 'react';
import { FaPowerOff } from 'react-icons/fa';
import './ButtonController1.css';

function ButtonController1() {
  const [colorMechedor, setColorMechedor] = useState('#202020');

  const changeColorMechedor = () => {
    if (colorMechedor === '#202020') {
      setColorMechedor('#0029FF');
    } else setColorMechedor('#202020');
  };
  return (
    <div>
      <button className="power1" type="button" onClick={changeColorMechedor}>
        <FaPowerOff size={35} color={colorMechedor} />
      </button>
    </div>
  );
}

export default ButtonController1;
