function Thermostat() {
  this.DEFAULT_TEMP = 20
  this.temperature = this.DEFAULT_TEMP
  this.MINIMUM_TEMP = 10
  this.powerSavingModeOn = true
};

Thermostat.prototype.getTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return (this.temperature === this.MINIMUM_TEMP);
};

Thermostat.prototype.switchPowerSavingMode = function() {
  this.powerSavingModeOn = !(this.powerSavingModeOn)
};

Thermostat.prototype.increaseTemp = function() {
  if (this.temperature < 25 && this.powerSavingModeOn === true) {
    this.temperature += 1
  }
  if (this.temperature < 32 && this.powerSavingModeOn === false) {
    this.temperature += 1
  }
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  return this.temperature -= 1
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = this.DEFAULT_TEMP
};