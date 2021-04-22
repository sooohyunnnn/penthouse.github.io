/* 21961045 박수현 */
$(document).ready(function () {


// 클릭하면 바뀌는거
    $('.movie_wrap .video1_btn').click(function () {
        $(this).toggleClass('on');
    });


    $('#movieImg').slidesjs({
        width:1920,
        height:1080,
        play: {
            active: false, // play/stop 버튼 활성화 , true=활성화, false=비활성화
            interval: 3000, // 대기시간, 1000=1초,
            effect: "slide", // 효과, slide/fade
            auto: false, // 자동시작
            pauseOnHover: false, // 마우스 오버시 멈춤
            restartDelay: 2500 // 마우스 아웃시 재동작 시간
        },
        navigation: {// 이전/다음 버튼
            active: true, // 버튼 활성화/비활성화
            effect: "slide"
        },
        pagination: {// 페이지네이션, 현재 선택된 슬라이드표시, 전체 갯수 표시
            active: true,
            effect: "slide"
        },
        effect: { // 효과 옵션
            fade: {
                speed: 800
            },
            slide: {
                speed: 1600
            }
        }
    });





    var video1 = document.getElementById("video1");
    var video2 = document.getElementById("video2");
    var video3 = document.getElementById("video3");


    $('.video1_btn').click(function () {
        video1.play();
        $('#movieImg .movie_wrap .play').fadeOut();
        $('#movieImg .movie_wrap .stop').fadeIn();
    });
    $('#movieImg .movie_wrap  .stop').click(function () {
        video1.pause();
        $('#movieImg .movie_wrap .play').fadeIn();
        $('#movieImg .movie_wrap .stop').fadeOut();
    });

    $('.video2_btn').click(function () {
        video2.play();
        $('#movieImg .movie_wrap .play').fadeOut();
        $('#movieImg .movie_wrap .stop').fadeIn();
    });
    $('#movieImg .movie_wrap .stop').click(function () {
        video2.pause();
        $('#movieImg .movie_wrap .play').fadeIn();
        $('#movieImg  .movie_wrap .stop').fadeOut();
    });
    $('.video3_btn').click(function () {
        video3.play();
        $('#movieImg  .movie_wrap .play').fadeOut();
        $('#movieImg .movie_wrap .stop').fadeIn();
    });
    $('#movieImg .movie_wrap .stop').click(function () {
        video3.pause();
        $('#movieImg .movie_wrap .play').fadeIn();
        $('#movieImg .movie_wrap .stop').fadeOut();
    });

});
