$(document).ready(function () {
  $("#popup_contents").click(function () {
    $("#popup").fadeIn();
  });
  $("#popup").click(function () {
    $("#popup").fadeOut();
  });
});
