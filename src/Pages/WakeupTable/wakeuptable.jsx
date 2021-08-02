import React, { useState } from 'react';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';

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
      <input type="file" onChange={saveFile} />
      {/* <button type="submit" onClick={handleShow}>Upload</button> */}
      <button type="button" onClick={handleOpen}>
        Upload
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="divDoModal">
          <h1>Confirmação do Envio</h1>
          <button type="button">Cancelar</button>
          <button type="submit" onClick={uploadFile}>Confirmar</button>
        </div>
      </Modal>
    </div>
  );
}
export default wakeuptable;
