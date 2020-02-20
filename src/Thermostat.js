function Thermostat() {
  this.DEFAULT_TEMP = 20
  this.temperature = this.DEFAULT_TEMP
  this.MINIMUM_TEMP = 10
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
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
  if (this.temperature < this.MAX_LIMIT_PSM_ON && this.powerSavingModeOn === true) {
    this.temperature += 1
  }
  if (this.temperature < this.MAX_LIMIT_PSM_OFF && this.powerSavingModeOn === false) {
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

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-usage';
  };
  if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAX_LIMIT_PSM_ON) {
    return 'medium-usage';
  };
  return 'high-usage';
}