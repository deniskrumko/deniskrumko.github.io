$(document).ready(function() {
  $(window).on("scroll", function() {
    $("#hey").toggleClass("shrink", $(this).scrollTop() > 100)
    $("#brand").toggleClass("shrink-brand", $(this).scrollTop() > 100)
});
});
