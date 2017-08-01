$(document).ready(function() {
    $('#set-alarm').submit(function(event) {
      event.preventDefault();
      var alarm = $('#alarm-input').val();
      $('#alarm-time').text(alarm);
      $('#view-alarm').show();
    });
});
