import { React, useState } from 'react';
import { FaPowerOff } from 'react-icons/fa';
import { sendESPData } from '../../Functions/RequestHandler/RequestHandler';
import './ButtonController1.css';

function ButtonController1() {
  const [colorMixer, setColorMixer] = useState('#202020');
  const [sentData, setSendData] = useState(true);
  const changeColorMixer = () => {
    if (colorMixer === '#202020') {
      setColorMixer('#0029FF');
    } else setColorMixer('#202020');
  };
  return (
    <div>
      <button
        className="power-1"
        type="button"
        onClick={(e) => {
          console.log('a');
          e.preventDefault();
          changeColorMixer();
          sendESPData({ MdlMisAcv: sentData });
          setSendData(!sentData);
        }}
      >
        <FaPowerOff size={35} color={colorMixer} />
      </button>
    </div>
  );
}

export default ButtonController1;
