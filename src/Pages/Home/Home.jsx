import React, { useRef, useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { MdFlashAuto } from 'react-icons/md';
import { GiHand } from 'react-icons/gi';
import { FaHome } from 'react-icons/fa';

import { Modal } from './Modal/Modal';
import './home.css';

const wifiName = 'o nome vai aqui';

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    /* eslint-disable-next-line */
    <div className="container">

      <div className="base">
        <Modal open={modalOpen} setOpen={setModalOpen} />
        <div className="upper-row">
          <div className="automatic-section">
            <MdFlashAuto />
            <button type="button">Torra automática</button>
          </div>
          <div className="manual-section">
            <button type="button">Torra manual</button>
          </div>
        </div>
        <div className="lower-row">

          <div className="wifi-section">
            <button type="button" onClick={() => { setModalOpen(true); }}>Mudar configurações de wifi</button>
          </div>

          <div className="section">
            <button type="button">Mudar parâmetros da máquina</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
