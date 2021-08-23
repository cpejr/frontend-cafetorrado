import React, { useState } from 'react';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import './wakeuptable.css';
import { FiAlertCircle } from 'react-icons/fi';

function wakeuptable() {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (fileName.split('.').pop() === 'bin') {
      setOpen(true);
    } else {
      setOpen(false);
      alert('Formato de arquivo inadequado!');
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    // Relação atributo-valor
    formData.append('file', file);
    formData.append('fileName', fileName);
    // try {
    //   await axios.post(
    //     'http://localhost:8888/upload',
    //     formData,
    //   );
    // } catch (ex) {
    //   console.error(ex);
    // }
  };

  return (
    <div className="WakeContainer">
      <div className="Input-Button">
        <h1> Envie seu Arquivo binário </h1>
        {/* // Definição do tipo de arquivo permitido para upload */}
        <input className="Input" type="file" accept=".bin" onChange={saveFile} />
        <button className="Button" type="button" onClick={handleOpen}>
          Fazer Upload
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="div-Do-Modal">
          <div className="tittle-Modal">
            <h1>Confirmação do Envio</h1>
          </div>
          <div className="buttons">
            <button className="B1" type="button" onClick={handleClose}>Cancelar</button>
            <button className="B2" type="submit" onClick={uploadFile}>Confirmar</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default wakeuptable;
