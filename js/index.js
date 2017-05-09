(function($){
  $(function(){

    $('.menu-opener').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });

    $('.scrollspy').scrollSpy({
      scrollOffset: 50
    });
    // setTimeout(function(){
    //   $('#email-me').addClass('scale-in');
    // }, 500);

  }); // end of document ready
})(jQuery); // end of jQuery name space
