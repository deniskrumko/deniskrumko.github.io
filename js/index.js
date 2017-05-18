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

    $('.action-chip').click(function(){
      var chip_name = $(this).data('name');
      var showed = $(this).data('showed');
      var original = $(this).data('original');
      if ($(this).data('state') == 'closed'){
          $(this).find('span').html(showed);
          $(this).data('state', 'opened');
      } else {
        $(this).find('span').html(original);
        $(this).data('state', 'closed');
      }

    });
    // setTimeout(function(){
    //   $('#email-me').addClass('scale-in');
    // }, 500);

    ymaps.ready(function () {


    var myMap = new ymaps.Map("map", {
            center: [56.014079, 92.857888],
            zoom: 16,
            controls: ['zoomControl', 'searchControl', 'fullscreenControl']
        }, {
            searchControlProvider: 'yandex#search'
        })

    myMap.geoObjects
        .add(new ymaps.Placemark([56.014079, 92.857888], {
            balloonContent: 'This is there I am working right now!<br><a href="https://www.interesnee.ru">www.interesnee.ru</a>',
            iconCaption: 'Очень Интересно'
        }, {
            preset: 'islands#redDotIconWithCaption'
        }));
            });
  }); // end of document ready
})(jQuery); // end of jQuery name space
