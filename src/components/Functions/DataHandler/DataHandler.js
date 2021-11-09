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
      BchPrsScl: 0,
      BchHumScl: 0,
      BchTmpScl: 0,
    },
  });
  useEffect(() => {
    socket.on('realData', (data) => { setUppData(data); });
  }, []);
  return (
    <div style={{ display: 'flex' }}>
      <div style={{
        display: 'flex', flexDirection: 'row', fontSize: 25, marginRight: 30,
      }}
      >
        <div>
          <p className="fontColor">Temperatura do Ar:</p>
          <p className="fontColor">Temperatura do Grão:</p>
          <p className="fontColor">Percentual da Chama:</p>
          <p className="fontColor">Percentual do Tambor:</p>
        </div>
        <div style={{ paddingLeft: '30px' }}>
          <p className="fontColor">{(uppData.fields.MdlAirScl.toFixed(2))}</p>
          <p className="fontColor">{(uppData.fields.MdlGraScl.toFixed(2))}</p>
          <p className="fontColor">
            {uppData.fields.MdlInjOut}
            %
          </p>
          <p className="fontColor">
            {uppData.fields.MdlDruOut}
            %
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', fontSize: 25 }}>
        <div>
          <p className="fontColor">Percentual do Ar:</p>
          <p className="fontColor">Pressão Escalar:</p>
          <p className="fontColor">Umidade do Ar:</p>
          <p className="fontColor">Temperatura Ambiente:</p>
        </div>
        <div style={{ paddingLeft: '30px' }}>
          <p className="fontColor">
            {(uppData.fields.MdlAirOut)}
            %
          </p>
          <p className="fontColor">
            {(uppData.fields.BchPrsScl.toFixed(2))}
          </p>
          <p className="fontColor">
            {(uppData.fields.BchHumScl.toFixed(2))}
          </p>
          <p className="fontColor">
            {(uppData.fields.BchTmpScl.toFixed(2))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RealData;
