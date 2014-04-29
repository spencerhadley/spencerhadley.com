$(document).ready(function() {
  $("#viewer_controls").on('click', 'span', function() {
    $("#viewer img").removeClass("opaque");

    var newImage = $(this).index();

    $("#viewer img").eq(newImage).addClass("opaque");

    $("#viewer_controls span").removeClass("selected");
    $(this).addClass("selected");
  });
});