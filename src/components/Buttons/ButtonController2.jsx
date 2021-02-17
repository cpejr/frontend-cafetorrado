import { React, useState } from 'react';
import { FaPowerOff } from 'react-icons/fa';
import './ButtonController2.css';

function ButtonController2() {
  const [colorResfriador, setColorResfriador] = useState('#BC1212');

  const changeColorResfriador = () => {
    if (colorResfriador === '#BC1212') {
      setColorResfriador('#0029FF');
    } else setColorResfriador('#BC1212');
  };
  return (
    <div>
      <button className="power1" type="button">
        <FaPowerOff
          size={35}
          color={colorResfriador}
          onClick={changeColorResfriador}
        />
      </button>
    </div>
  );
}

export default ButtonController2;
