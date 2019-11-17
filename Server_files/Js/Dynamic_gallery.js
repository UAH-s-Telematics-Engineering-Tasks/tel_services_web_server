$(document).ready(function () {
  var N_IMAGES = $("img").length;
  function update_showcase () {
    $("div.main_image").children().each(function () {$(this).remove()});
    $("div.main_image").append($("div.info_popup:eq(" + index + ")").clone());
    $("div.main_image").children().children("img").mouseenter(function () {
      $(this).siblings("div").fadeIn("slow");
    });
    $("div.main_image").children().children("div").mouseleave(function () {
      $(this).fadeOut("slow");
    });
    $("div.main_image").children().children("div").addClass("selected");
    $("div.main_image").children().children("div").removeClass("selected_static");
    $("div.selected_static").hide();
    $("div.selected_static:eq(" + index + ")").show();
    $("div.caption").children()[0].remove();
    $("div.caption").append($("<p>" + $("div.main_image").children("div.info_popup").children("img")[0].alt + "</p>"));
  }

  $("div.info_popup").children("div").each(function () {
    $(this).append($('<p class="selected_text">'+ $(this).siblings()[0].alt + '</p>'));
  });
  $("div.main_image").append($("div.info_popup:eq(0)").clone());
  $("div.main_image").children().children("div").removeClass("selected_static");
  $("div.main_image").children().children("div").addClass("selected");
  $("div.selected_static:eq(0)").show();

  $("div.main_image").children().children("img").mouseenter(function () {
    $(this).siblings("div").fadeIn("slow");
  });
  $("div.main_image").children().children("div").mouseleave(function () {
    $(this).fadeOut("slow");
  });

  $("div.caption").append($("<p>" + $("div.info_popup:eq(0)").children("img")[0].alt + "</p>"));
  var index = 0;
  $("#right").click(function () {
    if (index < N_IMAGES - 1)
      index++;
    else
      index = 0;
    update_showcase();
  });
  $("#left").click(function () {
    if (index > 0)
      index--;
    else
      index = N_IMAGES - 1;
    update_showcase();
  });
});
