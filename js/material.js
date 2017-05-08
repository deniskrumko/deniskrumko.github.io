(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.brand-logo').sideNav();

    setTimeout(function(){
      $('#email-me').addClass('scale-in');
    }, 500);

  }); // end of document ready
})(jQuery); // end of jQuery name space
