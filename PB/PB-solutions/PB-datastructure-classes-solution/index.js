//  1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    return `${this.name}, ${this.age} years old.`;
  }
}

const fran = new Person("Fran", 25);
console.log(fran.describe());

// 2
class Cylinder {
  constructor(height, radius) {
    this.height = height;
    this.radius = radius;
  }
  getVolume() {
    return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
  }
}

const cylinder = new Cylinder(4, 6);
console.log(cylinder.getVolume());

// 3
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  start() {
    this.render();
  }
}

let clock = new Clock({template: "h:m:s"});
clock.start();

// 4

class TV {
  constructor(brand) {
    this.brand = brand;
    this.channel = 1;
    this.volume = 50;
  }

  increaseVolume() {
    if (this.volume < 100) {
      this.volume++;
      console.log("Volume", this.volume);
    }
  }
  decreaseVolume() {
    if (this.volume >= 0) {
      this.volume--;
      console.log("Volume", this.volume);
    }
  }
  getNewChannel() {
    this.channel = Math.floor(Math.random() * 51);
    console.log(`Channel: ${this.channel}`);
  }

  getTVstatus() {
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
  }

  resetTV() {
    if(this.volume !== 1 || this.channel !== 50) {
      this.channel = 1;
      this.volume = 50
    }
  }
}

const tv = new TV("Panasonic");
tv.increaseVolume();
tv.decreaseVolume();
tv.getNewChannel();
console.log(tv.getTVstatus());
tv.resetTV();
console.log(tv.getTVstatus());
