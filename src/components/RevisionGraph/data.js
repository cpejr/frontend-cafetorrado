const generateValues = () => {
  return Math.random() * (50 - 0);
};

const randomDatas = (manyTimes) => {
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
      data: randomDatas(5),
      fill: false,
    },
    {
      label: 'Velocidade',
      fill: false,
      backgroundColor: 'lightblue',
      borderColor: 'lightblue',
      data: randomDatas(5),
    },
    {
      label: 'RoR',
      fill: false,
      backgroundColor: 'gray',
      borderColor: 'gray',
      data: randomDatas(5),
    },
    {
      label: 'Umidade',
      fill: false,
      backgroundColor: 'red',
      borderColor: 'red',
      data: randomDatas(5),
    },
    {
      label: 'Pressão',
      fill: false,
      backgroundColor: 'white',
      borderColor: 'white',
      data: randomDatas(5),
    },
  ],
};

export default data;
