import React, { useEffect, useState } from 'react';
import { socket } from '../index';

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
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div>
        <p>Temperatura do Ar:</p>
        <p>Temperatura do Grão:</p>
        <p>Percentual da chama:</p>
        <p>Percentual do Tambor:</p>
        <p>Percentual do Ar:</p>
      </div>
      <div style={{ paddingLeft: '30px' }}>
        <p>{uppData.fields.MdlAirScl}</p>
        <p>{uppData.fields.MdlGraScl}</p>
        <p>
          {uppData.fields.MdlInjOut}
          %
        </p>
        <p>
          {uppData.fields.MdlDruOut}
          %
        </p>
        <p>
          {uppData.fields.MdlAirOut}
          %
        </p>
      </div>
    </div>
  );
};

export default RealData;
