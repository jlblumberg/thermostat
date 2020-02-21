$(document).ready(function () {
  var thermostat = new Thermostat();
  var firstLoad;
  updateTemperatureText();
  updatePowerSavingMode();

  $('#temperature-up').click(function () {
    thermostat.increaseTemp();
    updateTemperatureText();
  });

  $('#temperature-down').click(function () {
    thermostat.decreaseTemp();
    updateTemperatureText();
  });

  $('#temperature-reset').click(function () {
    thermostat.resetTemp();
    updateTemperatureText();
  });

  $('#powersaving-mode').click(function () {
    thermostat.switchPowerSavingMode();
    updatePowerSavingMode();
    updateTemperatureText();
  });

  $('#select-city').submit(function (event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  function updateTemperatureText() {
    $('#temperature').text('Current setting: ' + thermostat.temperature);
    if (firstLoad == null) {
      firstLoad = "no";
      var loadTemp = $.jStorage.get("Temp");
      if (loadTemp > 0) {
        thermostat.temperature = loadTemp
      }
    }
    $('#temperature').text('Current setting: ' + thermostat.temperature);
    $("body").attr('class', thermostat.energyUsage());
    $.jStorage.set("Temp", thermostat.temperature);
  };

  function updatePowerSavingMode() {
    var status;
    if (thermostat.powerSavingModeOn === true) {
      status = "on"
    } else {
      status = "off"
    };
    $('#power-saving-status').text("Power saving mode is " + status);
  };

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function (data) {
      $('#current-temperature').text(data.main.temp);
    });
  };
});