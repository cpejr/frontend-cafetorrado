import { React, useState } from 'react';
import { FaPowerOff } from 'react-icons/fa';
import './ButtonController2.css';

function ButtonController2() {
  const [colorRefrigerator, setColorRefrigerator] = useState('#202020');

  const changeColorRefrigerator = () => {
    if (colorRefrigerator === '#202020') {
      setColorRefrigerator('#0029FF');
    } else setColorRefrigerator('#202020');
  };
  return (
    <div>
      <button
        className="power-1"
        type="button"
        onClick={changeColorRefrigerator}
      >
        <FaPowerOff size={35} color={colorRefrigerator} />
      </button>
    </div>
  );
}

export default ButtonController2;
