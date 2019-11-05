$(document).ready(function () {
  $("div.popup").hide();
  var images = $("img");
  var display_window = 3;
  var l_image = ;
  var r_image = ;
  $("img").mouseenter(function () {
    $(this).next("div").fadeIn("slow");
  });
  $("div.popup").mouseleave(function () {
    $(this).fadeOut("slow");
  });
  $("button.left").click(function () {
    if (index < 3) {
      index++
      images[index].detach();
    }
  });
});
