var Alarm = require('./../js/alarm.js').alarmModule;


$(document).ready(function() {
    $('#set-alarm').submit(function(event) {
      event.preventDefault();
      var alarmTime = $('#alarm-input').val();
      var newAlarm = new Alarm(alarmTime);

      setInterval(function() {
        newAlarm.alarmCheck();
        if (newAlarm.alarmCheck() === true) {
          $('#buzzer').show();
        }
      }, 1000);

      $('#alarm-time').text(alarmTime);
      $('#view-alarm').show();
    });
});
