class ElectricDevice {
    constructor(name, model, power) {
        this.name = name;
        this.model = model;
        this.power = power;
        this.isSwitchedOn = false
    }
    switchOn() {
        this.isSwitchedOn = true;
        console.log(`The ${this.name} ${this.model} is switched on`)
    }
    switchOff() {
        this.isSwitchedOn = false;
        console.log(`The ${this.name} ${this.model} is switched off`)
    }
}
  
class Lamp extends ElectricDevice {
    constructor(name, model, power, color, brightness) {
        super(name, model, power);
        this.color = color;
        this.brightness = brightness
    }
    getColor() {
        console.log(`The ${this.name} ${this.model} color is ${this.color}`)
    }
}

class Computer extends ElectricDevice {
    constructor(name, model, power, CPU, RAM, HDD) {
        super(name, model, power);
        this.CPU = CPU;
        this.RAM = RAM;
        this.HDD = HDD
    }
    getComputerConfig() {
        console.log(`The ${this.name} ${this.model} configuration is: CPU - ${this.CPU} MHz, RAM - ${this.RAM} Gb, HDD - ${this.HDD} Gb`)
    }
}

const desklamp = new Lamp('desklamp', 'GE', 8, 'white', 650)

const laptop = new Computer('laptop', 'Acer', 45, 2300, 8, 500)

function powerCheck(devices) {
  let totalPower = 0;
  devices.forEach(element => {
    if(element.isSwitchedOn) {
      totalPower = totalPower + element.power
    }
  });
  return `Total power of switched on devices = ${totalPower} W`
}

// All devices are switched off
console.log(powerCheck([laptop, desklamp]))

// Let's switch on all devices
desklamp.switchOn()
laptop.switchOn()

console.log(powerCheck([laptop, desklamp]))

// Let's switch off desklamp
desklamp.switchOff()

console.log(powerCheck([laptop, desklamp]))

// Let's try devices' own methods
desklamp.getColor()
laptop.getComputerConfig()