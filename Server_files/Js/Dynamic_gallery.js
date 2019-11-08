$(document).ready(function () {
  function update_showcase () {
    $("div.main_image").children().each(function () {$(this).remove()});
    $("div.main_image").append($("div.info_popup:eq(" + index + ")").clone(true, true));
    $("div.caption").children()[0].remove();
    $("div.caption").append($("<p>" + (index + 1) + "</p>"));
  }
  $("div.popup").hide();
  $("div.popup").each(function () {
    $(this).append($('<p class="popup">'+ $(this).siblings()[0].alt + '</p>'));
  });
  $("div.main_image").append($("div.info_popup:eq(0)").clone());
  // TODO: Add a class to show a purple overlay on the currently selected image!
  alert($("div.info_popup:eq(0)").next("div").addClass("popup_selected"));
  $("div.caption").append($("<p>" + $("div.info_popup:eq(0)").children("img")[0].alt + "</p>"));
  var images = $("div.info_popup");
  var display_window = 3;
  var index = 0;
  $("img").mouseenter(function () {
    $(this).next("div").fadeIn("slow");
  });
  $("div.popup").mouseleave(function () {
    $(this).fadeOut("slow");
  });
  $("#right").click(function () {
    if (index < 3)
      index++;
    else
      index = 0;
    update_showcase();
  });
  $("#left").click(function () {
    if (index > 0)
      index--;
    else
      index = 3;
    update_showcase();
  });
});
