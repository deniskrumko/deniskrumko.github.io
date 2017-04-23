$(document).ready(function() {
  $(window).on("scroll", function() {
    $("#navbar").toggleClass("shrink", $(this).scrollTop() > 100)
    $(".nav-item").toggleClass("shrink-nav", $(this).scrollTop() > 100)
  });
});
