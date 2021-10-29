import { React, useState } from 'react';
import { GiCoffeeBeans } from 'react-icons/gi';
import './ButtonController1.css';

function ButtonController1() {
  const [colorMixer, setColorMixer] = useState('#202020');

  const changeColorMixer = () => {
    if (colorMixer === '#202020') {
      setColorMixer('#0029FF');
    } else setColorMixer('#202020');
  };

  return (
    <div>
      <button className="power-1" type="button" onClick={() => window.crackIt()}>
        <GiCoffeeBeans size={35} color={colorMixer} />
      </button>
    </div>
  );
}

export default ButtonController1;
