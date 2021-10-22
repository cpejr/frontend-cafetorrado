/* eslint-disable */
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { MdFlashAuto, MdInput } from 'react-icons/md';
import { GiHand } from 'react-icons/gi';
import { FiBook } from 'react-icons/fi';
import { Modal } from './Modal/Modal';
import { sendMachineParams } from '../../components/Functions/RequestHandler/RequestHandler.js';
import { sendESPData } from '../../components/Functions/RequestHandler/RequestHandler.js';
import './home.css';

const wifiName = 'o nome vai aqui';

const Home = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const history = useHistory();

  const sendManual = () => history.push('/RecipeSelection', 'manual');
  const sendAutomatic = () => history.push('/RecipeSelection', 'automatic');

  return (
    <div className="container">
      <div className="base">
        <Modal open={modalOpen} setOpen={setModalOpen} />
        <div className="upper-row">
          <div className="automatic-section">
            <button type="button" className="upper-button" onClick={(e) => { e.preventDefault(); sendAutomatic(); }}>
              <MdFlashAuto />
              <p>Torra automática</p>
            </button>
          </div>
          <div className="manual-section">
            <button type="button" className="upper-button" onClick={(e) => { e.preventDefault(); sendManual(); }}>
              <GiHand />
              <p>Torra manual</p>
            </button>
          </div>
        </div>
        <div className="lower-row">
          <div className="wakeup-section">
            <button type="button" onClick={() => { history.push('/wakeuptable'); }} className="upper-button">
              <MdInput />
              <p>Importar wake up tables</p>
            </button>
          </div>

          <div className="section">
            <button type="button" className="upper-button" onClick={() => { history.push('/recipeSelection'); }}>
              <FiBook />
              <p>Visualizar receitas</p>
            </button>
          </div>

        </div>
      </div >
    </div >
  );
};

export default Home;
