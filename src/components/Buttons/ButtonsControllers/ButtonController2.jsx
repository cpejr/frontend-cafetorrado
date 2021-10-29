import { React, useState } from 'react';
import { FaPowerOff } from 'react-icons/fa';
import { IoIosSnow } from 'react-icons/io';
import { sendESPData } from '../../Functions/RequestHandler/RequestHandler';
import './ButtonController2.css';

function ButtonController2() {
  const [colorRefrigerator, setColorRefrigerator] = useState('#202020');
  const [sentData, setSendData] = useState(true);
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
        onClick={(e) => {
          e.preventDefault();
          sendESPData({ MdlIgnAcv: sentData });
          changeColorRefrigerator();
          setSendData(!sentData);
        }}
      >
        <IoIosSnow size={35} color={colorRefrigerator} />
      </button>
    </div>
  );
}

export default ButtonController2;
