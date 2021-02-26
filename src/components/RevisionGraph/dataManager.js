class FakeData {
  random = Math.random;

  generateValues() {
    return this.random() * (50 - 0);
  }

  randomDatas(manyTimes = 20) {
    var data = [];
    for (let i = 0; i < manyTimes; i++) {
      data.push(this.generateValues());
    }
    return data;
  }

  get({ number }) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve({
          temperature: this.randomDatas(number),
          velocity: this.randomDatas(number),
          ror: this.randomDatas(number),
          humidity: this.randomDatas(number),
          pressure: this.randomDatas(number),
        });
      }, 1500);
    });
  }
}

const fakeData = new FakeData();
export default fakeData;
