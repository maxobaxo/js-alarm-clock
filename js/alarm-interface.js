var Alarm = require('./../js/alarm.js').alarmModule;


$(document).ready(function() {
    $('#set-alarm').submit(function(event) {
      event.preventDefault();
      var alarmTime = $('#alarm-input').val();
      var newAlarm = new Alarm(alarmTime);

      // console.log(ring);
      setInterval(function() {
        if (newAlarm.alarmCheck() === true) {
          $('#buzzer').show();
          // alert("works");
        }
      }, 1000);

      $('#alarm-time').text(alarmTime);
      $('#view-alarm').show();
    });
});
