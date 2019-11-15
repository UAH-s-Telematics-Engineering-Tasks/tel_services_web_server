$(document).ready(function () {
  $("div.popup").each(function () {
    $(this).append($('<p class="popup">' + $(this).siblings()[0].alt + '</p>'));
  });
  $("img").mouseenter(function () {
    $(this).next("div").fadeIn("slow");
  });
  $("div.popup").mouseleave(function () {
    $(this).fadeOut("slow");
  });
});
