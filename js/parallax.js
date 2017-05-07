$(document).ready(function() {
  $(window).on("scroll", function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 670) {
        $(".slider").removeClass("closed");
    } else {
        $(".slider").addClass("closed");
    }
  });
});
