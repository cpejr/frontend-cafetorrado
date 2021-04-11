const INITALLDATA = {
  type: 'line',
  labels: [],
  datasets: [
    {
      fill: false,
      label: 'Temperatura do Ar',
      data: [],
      yAxisID: 'left',
      borderColor: 'white',
      borderWidth: 3,
      pointRadius: 1,
    },
    {
      fill: false,
      label: 'Temperatura do Grão',
      yAxisID: 'left',
      data: [],
      borderColor: 'pink',
      borderWidth: 3,
      pointRadius: 1,
    },
    {
      fill: false,
      label: 'Percentual de chama',
      data: [],
      yAxisID: 'right',
      borderColor: 'red',
      borderWidth: 3,
      pointRadius: 1,
    },

    {
      fill: false,
      label: 'Percentual do Tambor',
      yAxisID: 'right',
      data: [],
      borderColor: 'blue',
      borderWidth: 3,
      pointRadius: 1,
    },

    {
      fill: false,
      label: 'Percentual de ar',
      yAxisID: 'right',
      data: [],
      borderColor: 'yellow',
      borderWidth: 3,
      pointRadius: 1,
    },

  ],
};

export { INITALLDATA };
