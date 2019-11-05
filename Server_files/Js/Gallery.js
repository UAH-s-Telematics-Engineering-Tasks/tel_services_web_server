$(document).ready(function () {
  $("div.popup").hide();
  $("img").mouseenter(function () {
    $(this).next("div").fadeIn("slow");
  });
  $("div.popup").mouseleave(function () {
    $(this).fadeOut("slow");
  });
});
