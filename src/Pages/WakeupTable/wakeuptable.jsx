import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import './wakeuptable.css';

function wakeuptable() {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState('');
  const [open, setOpen] = useState(false);

  const [upload, setUpload] = useState();

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
    formData.append('file', file);
    formData.append('fileName', fileName);
    sendUploadFile(file);
  };

  return (
    <div className="WakeContainer">
      <div className="Input-Button">
        <h1> Envie seu Arquivo binário </h1>
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
