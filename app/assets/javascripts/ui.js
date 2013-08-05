$(function () {
  $('.nav-link').click(function () {
    var sectionId = $(this).attr('href');
    $('body').animate({scrollTop: $(sectionId).offset().top - 50}, 'slow');
    return false;
  });
  
  $('.back-link').click(function () {
    $('body').animate({scrollTop: 0}, 'slow');
    return false;
  });
});
