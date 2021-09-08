const INITALLDATA = {
  type: 'line',
  labels: [],
  datasets: [
    {
      fill: false,
      label: 'Temperatura do Ar',
      data: [],
      yAxisID: 'left',
      borderColor: 'red',
      borderWidth: 3,
      pointRadius: 0,
    },
    {
      fill: false,
      label: 'Temperatura do Grão',
      yAxisID: 'left',
      data: [],
      borderColor: '#4292C6',
      borderWidth: 3,
      pointRadius: 0,
    },
    {
      fill: false,
      label: 'Percentual de chama',
      data: [],
      yAxisID: 'right',
      borderColor: '#2171B5',
      borderWidth: 3,
      pointRadius: 0,
    },

    {
      fill: false,
      label: 'Percentual do Tambor',
      yAxisID: 'right',
      data: [],
      borderColor: 'blue',
      borderWidth: 3,
      pointRadius: 0,
    },

    {
      fill: false,
      label: 'Percentual de ar',
      yAxisID: 'right',
      data: [],
      borderColor: '#ff8c00',
      borderWidth: 3,
      pointRadius: 0,
    },

  ],
};

export { INITALLDATA };
