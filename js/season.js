/* 21961045 박수현 */
$(document).ready(function () {

  $('.card1').click(function () {
      $('#card1_pop').addClass('on');
  });
  $('#card1_pop .previewCut_close').click(function () {
      $('#card1_pop').removeClass('on');
  });

  $('.card2').click(function () {
      $('#card2_pop').addClass('on');
  });
  $('#card2_pop .previewCut_close').click(function () {
      $('#card2_pop').removeClass('on');
  });

  $('.card3').click(function () {
      $('#card3_pop').addClass('on');
  });
  $('#card3_pop .previewCut_close').click(function () {
      $('#card3_pop').removeClass('on');
  });


  var season1 = document.getElementById("season1");
  var season2 = document.getElementById("season2");
  var season3 = document.getElementById("season3");


  $('.season1_btn').click(function () {
      season1.play();
      $('#card1_pop .movie_wrap .play').fadeOut();
      $('#card1_pop .movie_wrap .stop').fadeIn();
  });
  $('#card1_pop .movie_wrap .stop').click(function () {
      season1.pause();
      $('#card1_pop .movie_wrap .play').fadeIn();
      $('#card1_pop .movie_wrap .stop').fadeOut();
  });

  $('.season2_btn').click(function () {
      season2.play();
      $('#card2_pop .movie_wrap .play').fadeOut();
      $('#card2_pop .movie_wrap .stop').fadeIn();
  });
  $('#card2_pop .movie_wrap .stop').click(function () {
      season2.pause();
      $('#card2_pop .movie_wrap .play').fadeIn();
      $('#card2_pop .movie_wrap .stop').fadeOut();
  });

});
