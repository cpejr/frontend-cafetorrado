const generateValues = () => Math.random() * (50 - 0);

const randomDatas = (manyTimes = 5) => {
  var data = [];
  for (let i = 0; i < manyTimes; i++) {
    data.push(generateValues());
  }
  return data;
};

const data = {
  labels: [1, 2, 3, 4, 5],
  datasets: [
    {
      label: 'Temperatura',
      backgroundColor: 'blue',
      borderColor: 'blue',
      data: randomDatas(),
      fill: false,
    },
    {
      label: 'Velocidade',
      fill: false,
      backgroundColor: 'lightblue',
      borderColor: 'lightblue',
      data: randomDatas(),
    },
    {
      label: 'RoR',
      fill: false,
      backgroundColor: 'gray',
      borderColor: 'gray',
      data: randomDatas(),
    },
    {
      label: 'Umidade',
      fill: false,
      backgroundColor: 'red',
      borderColor: 'red',
      data: randomDatas(),
    },
    {
      label: 'Pressão',
      fill: false,
      backgroundColor: 'white',
      borderColor: 'white',
      data: randomDatas(),
    },

  ],
};

export default data;
