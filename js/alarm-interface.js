// var Clock = require('./../js/alarm.js').clockModule;

function clockDisplay() {
  var date = moment(new Date());
  time.html(date.format('h:mm:ss a'));
}

$(document).ready(function() {
    time = $('#time');
    clockDisplay();
    setInterval(clockDisplay, 1000);
});
