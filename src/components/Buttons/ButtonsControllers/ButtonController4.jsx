/*eslint-disable*/
import { React, useState } from 'react';
import { BiCurrentLocation } from 'react-icons/bi';
import { useGlobalContext } from '../../../Context/GlobalContext';
import './ButtonController1.css';

function ButtonController1() {
    const [colorMixer, setColorMixer] = useState('#202020');
    const { marksGraph } = useGlobalContext();

    const changeColorMixer = () => {
        if (colorMixer === '#202020') {
            setColorMixer('#0029FF');
        } else setColorMixer('#202020');
    };

    const disabled = marksGraph.filter((mark) => !mark.isCrack).length >= 5;

    return (
        <div>
            <button
              disabled={disabled}
              className="power-1"
              type="button"
              onClick={() => window.markIt()}
              style={{ backgroundColor: disabled ? '#FF000077' : undefined }}
            >
                <BiCurrentLocation size={35} color={colorMixer} />
            </button>
        </div>
    );
}

export default ButtonController1;
