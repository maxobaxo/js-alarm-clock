var Alarm = require('./../js/alarm.js').alarmModule;
// var Clock = require('./../js/clock-interface.js').clockModule;

$(document).ready(function() {
    $('#set-alarm').submit(function(event) {
      event.preventDefault();
      var alarmTime = $('#alarm-input').val();
      var newAlarm = new Alarm(alarmTime);
      $('#alarm-time').text(alarmTime);
      $('#view-alarm').show();
    });

});
