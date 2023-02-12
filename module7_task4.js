function ElectricDevice(name, model, power) {
  this.name = name,
  this.model = model,
  this.power = power,
  this.isSwitchedOn = false
}
  
ElectricDevice.prototype.switchOn = function() {
    this.isSwitchedOn = true;
    console.log(`The ${this.name} ${this.model} is switched on`)
  }

  ElectricDevice.prototype.switchOff = function() {
    this.isSwitchedOn = false;
    console.log(`The ${this.name} ${this.model} is switched off`)
  }

function Lamp(color, brightness) {
  this.color = color,
  this.brightness = brightness
}

Lamp.prototype = new ElectricDevice()

Lamp.prototype.getColor = function() {
  console.log(`The ${this.name} ${this.model} color is ${this.color}`)
}

function Computer(CPU, RAM, HDD) {
  this.CPU = CPU,
  this.RAM = RAM,
  this.HDD = HDD
}

Computer.prototype = new ElectricDevice()

Computer.prototype.getComputerConfig = function() {
  console.log(`The ${this.name} ${this.model} configuration is: CPU - ${this.CPU} MHz, RAM - ${this.RAM} Gb, HDD - ${this.HDD} Gb`)
}

const desklamp = new Lamp('white', 650)
desklamp.name = 'desklamp'
desklamp.model = 'GE'
desklamp.power = 8

const laptop = new Computer(2300, 8, 500)
laptop.name = 'laptop'
laptop.model = 'Acer'
laptop.power = 45

function powerCheck(devices) {
  let totalPower = 0;
  devices.forEach(element => {
    if(element.isSwitchedOn) {
      totalPower = totalPower + element.power;
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