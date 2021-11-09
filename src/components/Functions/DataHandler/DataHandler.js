import React, { useEffect, useState } from 'react';
import { socket } from '../../../index';

const RealData = ({ uppData, setUppData }) => {
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
