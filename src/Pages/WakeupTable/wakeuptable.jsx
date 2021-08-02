import React, { useState } from 'react';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import './wakeuptable.css';

function wakeuptable() {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
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
    formData.append('file', file);
    formData.append('fileName', fileName);
    try {
      const res = await axios.post(
        'http://localhost:8888/upload',
        formData,
      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="WakeContainer">
      <div className="Input-Button">
        <input type="file" onChange={saveFile} />
        {/* <button type="submit" onClick={handleShow}>Upload</button> */}
        <button type="button" onClick={handleOpen}>
          Upload
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
            <button type="button" onClick={handleClose}>Cancelar</button>
            <button type="submit" onClick={uploadFile}>Confirmar</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default wakeuptable;
