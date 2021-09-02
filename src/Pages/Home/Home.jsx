import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { MdFlashAuto } from 'react-icons/md';
import { GiHand } from 'react-icons/gi';
import { FiBook } from 'react-icons/fi';
import { FaHome, FaWifi } from 'react-icons/fa';
import { Modal } from './Modal/Modal';
import './home.css';

const wifiName = 'o nome vai aqui';

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const history = useHistory();
  return (
    <div className="container">

      <div className="base">
        <Modal open={modalOpen} setOpen={setModalOpen} />
        <div className="upper-row">
          <div className="automatic-section">
            <button type="button" className="upper-button" onClick={() => { history.push('/recipeSelection', 'automatic'); }}>
              <MdFlashAuto />
              <p>Torra automática</p>
            </button>
          </div>
          <div className="manual-section">
            <button type="button" className="upper-button" onClick={() => { history.push('/recipeSelection', 'manual'); }}>
              <GiHand />
              <p>Torra manual</p>
            </button>
          </div>
        </div>
        <div className="lower-row">
          <div className="wifi-section">
            <button type="button" onClick={() => { setModalOpen(true); }} className="upper-button">
              <FaWifi />
              <p>Mudar configurações de wifi</p>
            </button>
          </div>

          <div className="section">
            <button type="button" className="upper-button" onClick={() => { history.push('/recipeSelection'); }}>
              <FiBook />
              <p>Visualizar receitas</p>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
