$(function() { /*Команда, когда пользователь загрузил страницу. Когда DOM ready, выполнить эту функцию*/

  $('.sidebar a').each(function() {

    $(this).on('click', function(e) { /*При клике выполнять действие*/

      e.preventDefault(); /*Выключение стандартного действия браузера*/

      var scrollTo = $(this).attr('href');
      var whitespace = scrollTo == '#s1' ? 70 : 30

      $('html,body').animate({
        scrollTop: $(scrollTo).offset().top - whitespace
      }, 1000); /*анимация, whitespace - это время за которое делаем эту функцию*/
    });
  });
});
