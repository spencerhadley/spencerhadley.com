<<<<<<< HEAD
// function test() {
// 	return "hi there";
// }
=======
$(document).ready(function() {
  $("#viewer_controls").on('click', 'span', function() {
    $("#viewer img").removeClass("opaque");

    var newImage = $(this).index();

    $("#viewer img").eq(newImage).addClass("opaque");

    $("#viewer_controls span").removeClass("selected");
    $(this).addClass("selected");
  });
});
>>>>>>> ea9b66b20011a9bb28991ebdef5fe0d129e4a53f
