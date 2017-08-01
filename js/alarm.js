Alarm = function(alarmTime) {
  this.alarmTime = alarmTime;
};

Alarm.prototype.alarmCheck = function() {
  var stringTime = moment().hours() + ":" + moment().minutes();
  if (this.alarmTime === stringTime) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

exports.alarmModule = Alarm;
