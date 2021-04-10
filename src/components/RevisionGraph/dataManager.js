// import { ASAP } from 'downsample';

// class FakeData {
//   //eslint-disable-next-line
//   random = Math.random;

//   generateValues(maxValue = 50) {
//     return this.random() * (maxValue - 0);
//   }

//   randomDatas(manyTimes = 20, maxValue = 50) {
//     var data = [];
//     for (let i = 0; i < manyTimes; i++) {
//       data.push(this.generateValues(maxValue));
//     }
//     return data.map((value, index) => [index, value]);
//   }

//   get({ samples }) {
//     return new Promise((resolve, _reject) => {
//       setTimeout(() => {
//         resolve({
//           temperature: this.randomDatas(samples, 240),
//           velocity: this.randomDatas(samples, 150),
//           ror: this.randomDatas(samples, 30),
//           humidity: this.randomDatas(samples, 80),
//           pressure: this.randomDatas(samples, 1000),
//          });
//       }, 1500);
//     });
//   }
// }

// const filterData = (data, { maxData }) => {
//   function downsample(array = []) {
//     return ASAP(array, maxData);
//   }
//   const samplingData = {
//     temperature: downsample(data.temperature),
//     velocity: downsample(data.velocity),
//     ror: downsample(data.ror),
//     humidity: downsample(data.humidity),
//     pressure: downsample(data.pressure),
//   };
//   console.log(data, samplingData);

//   return samplingData;
// };

// const pointFormatter = (data) => {
//   function points(array = []) {
//     return array.map((point) => ({ x: point[0], y: point[1] }));
//   }
//   const newData = {
//     temperature: points(data.temperature),
//     velocity: points(data.velocity),
//     ror: points(data.ror),
//     humidity: points(data.humidity),
//     pressure: points(data.pressure),
//   };

//   return newData;
// };

// const fakeData = new FakeData();
// export { fakeData, pointFormatter, filterData };
