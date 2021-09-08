import React, { useEffect, useState } from 'react';
import { socket } from '../../../index';

const RealData = () => {
  const [uppData, setUppData] = useState({
    fields: {
      BlkBegDaq: 3435973836,
      BlkEndDaq: 3722304989,
      BlkNotTrc: '',
      BlkNt2Trc: '',
      MdlAirOut: 0,
      MdlAirScl: 0,
      MdlDisErr: 5,
      MdlDruOut: 0,
      MdlGraScl: 0,
      MdlInjOut: 0,
      MdlRunCnt: 27677,

    },
  });
  useEffect(() => {
    socket.on('realData', (data) => { setUppData(data); });
  }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'row', fontSize: 25 }}>
      <div>
        <p className="fontColor">Temperatura do Ar:</p>
        <p className="fontColor">Temperatura do Grão:</p>
        <p className="fontColor">Percentual da chama:</p>
        <p className="fontColor">Percentual do Tambor:</p>
        <p className="fontColor">Percentual do Ar:</p>
      </div>
      <div style={{ paddingLeft: '30px' }}>
        <p className="fontColor">{(uppData.fields.MdlAirScl)}</p>
        <p className="fontColor">{(uppData.fields.MdlGraScl)}</p>
        <p className="fontColor">
          {uppData.fields.MdlInjOut}
          %
        </p>
        <p className="fontColor">
          {uppData.fields.MdlDruOut}
          %
        </p>
        <p className="fontColor">
          {(uppData.fields.MdlAirOut)}
          %
        </p>
      </div>
    </div>
  );
};

export default RealData;
