import { React, useState } from 'react';
import { FaPowerOff } from 'react-icons/fa';
import './ButtonController2.css';

function ButtonController2() {
  const [colorResfriador, setColorResfriador] = useState('#202020');

  const changeColorResfriador = () => {
    if (colorResfriador === '#202020') {
      setColorResfriador('#0029FF');
    } else setColorResfriador('#202020');
  };
  return (
    <div>
      <button className="power1" type="button" onClick={changeColorResfriador}>
        <FaPowerOff size={35} color={colorResfriador} />
      </button>
    </div>
  );
}

export default ButtonController2;
