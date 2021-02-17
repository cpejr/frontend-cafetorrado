import { React, useState } from 'react';
import { FaPowerOff } from 'react-icons/fa';
import './ButtonController1.css';

function ButtonController1() {
  const [colorMechedor, setColorMechedor] = useState('#BC1212');

  const changeColorMechedor = () => {
    if (colorMechedor === '#BC1212') {
      setColorMechedor('#0029FF');
    } else setColorMechedor('#BC1212');
  };
  return (
    <div>
      <button className="power1" type="button">
        <FaPowerOff
          size={35}
          color={colorMechedor}
          onClick={changeColorMechedor}
        />
      </button>
    </div>
  );
}

export default ButtonController1;
