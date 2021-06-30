const INITDATA = {
  type: 'line',
  labels: [1, 2, 3],
  datasets: [
    {
      fill: false,
      label: 'Temperatura do Ar',
      data: [12, 25, 45],
      yAxisID: 'left',
      borderColor: 'red',
      borderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 25,
      dragData: true,
    },
    {
      fill: false,
      label: 'Temperatura do Grão',
      yAxisID: 'left',
      data: [45, 98, 65],
      borderColor: '#4292C6',
      borderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 25,
      dragData: true,
    },
    {
      fill: false,
      label: 'Percentual de chama',
      data: [69, 45, 82],
      yAxisID: 'right',
      borderColor: '#2171B5',
      borderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 25,
      dragData: true,
    },

    {
      fill: false,
      label: 'Percentual do Tambor',
      yAxisID: 'right',
      data: [45, 23, 89],
      borderColor: 'blue',
      borderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 25,
      dragData: true,
    },

    {
      fill: false,
      label: 'Percentual de ar',
      yAxisID: 'right',
      data: [54, 74, 3],
      borderColor: 'yellow',
      borderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 25,
      dragData: true,
    },

  ],
};

export { INITDATA };
