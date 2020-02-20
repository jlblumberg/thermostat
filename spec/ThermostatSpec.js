'use strict';

describe('Theromstat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20 degrees', function(){
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('has an increase temperature button', function(){
    thermostat.increaseTemp();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it('has a decrease temperature button', function(){
    thermostat.decreaseTemp();
    expect(thermostat.getTemperature()).toEqual(19);
  });

  it('has a minimum temperature', function(){
    for (var i = 0; i < 11; i++) {
      thermostat.decreaseTemp();
    }
    expect(thermostat.getTemperature()).toEqual(10);
  });

  it('has a power-saving setting which defaults to on', function() {
    expect(thermostat.powerSavingModeOn).toEqual(true);
  });

  it('has a switch for toggling powersaving mode', function(){
    thermostat.switchPowerSavingMode()
    expect(thermostat.powerSavingModeOn).toBe(false)
    thermostat.switchPowerSavingMode()
    expect(thermostat.powerSavingModeOn).toBe(true)
  });

  it('has a maximum temp of 25 degrees when in powersaving mode', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.increaseTemp();
    };
    expect(thermostat.getTemperature()).toEqual(25);
  });

  it('has a maximum temp of 32 degrees when not in powersaving mode', function() {
    thermostat.switchPowerSavingMode()
    for (var i = 0; i < 30; i++){
      thermostat.increaseTemp();
    }
    expect(thermostat.getTemperature()).toEqual(32);
  });

});