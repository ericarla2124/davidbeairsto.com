/* email */
$(window).on('load', function() {
"use strict";
var obfuscate = "#obfuscate-address";
if($(obfuscate).length){
var obfuscateStr = $(obfuscate).data('obfuscatekey');
$(obfuscate).attr("href", atob("bWFpbHRvOg==") + atob(obfuscateStr));
$(obfuscate).html(atob(obfuscateStr));
}
});

/* line */
$(function () {
    $('div.line').each(function () {
        var $win = $(window),
            $winH = $win.height(),
            $connect = $(this),
            position = $connect.offset().top,
            current = 0,
            scroll;
        $win.on('load scroll', function () {
            scroll = $win.scrollTop();
            current = (1 - (position - scroll) / $winH) * 2 * 100;
            if (current > 99.9) {
                current = 100;
            }
            if (scroll > position - $winH) {
                $connect.css({height: current + '%'});
            }
        });
    });
});

/* smooth scr */
window.addEventListener('load', function() {
    document.querySelector('.js-scroll-to-top').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
    });
});



/* menu */
$('.menu').on('click',function(){
    $('.menu__line').toggleClass('active');
    $('.gnav').fadeToggle();
});

$('.gnav').on('click',function(){    
    $('.menu__line').toggleClass('active');
    $('.gnav').fadeToggle();
});


/* line */
$(function () {
    $('.line').each(function () {
        var $win = $(window),
            $winH = $win.height(),
            $connect = $(this),
            position = $connect.offset().top,
            current = 0,
            scroll;
        $win.on('load scroll', function () {
            scroll = $win.scrollTop();
            current = (1 - (position - scroll) / $winH) * 2 * 100;
            if (current > 99.9) {
                current = 100;
            }
            if (scroll > position - $winH) {
                $connect.css({height: current + '%'});
            }
        });
    });
});

/* pagetop */
$(function() {
    var topBtn = $('#page-top');    
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    
    var topBtn = $('#page-top');
    topBtn.hide();
    var windowWidth = $(window).width();
    var windowSm = 767;
    if (windowWidth <= windowSm) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 600) {
                topBtn.fadeIn();
            }
        });
    }
                         
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});


/* slider */
$(document).on('ready', function() {
    $(".regular").slick({
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
        //asNavFor: '.thumb-item-nav'
    });

    $(".regular").on("init",function(){
        $(".balloon-msg").fadeIn(400);
    });
    $(".regular").on("beforeChange",function(){
        $(".balloon-msg").css("display", "none");
    });
    $(".regular").on("afterChange",function(){
        var currIndex = $('.regular').slick('slickCurrentSlide');
        $(".balloon-msg").text(getMessage(currIndex));
        $(".balloon-msg").fadeIn(400);
    });

    /*
     $('.thumb-item-nav').slick({
     dots: false,
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     asNavFor: '.regular',
     focusOnSelect: true,
     arrows: false
     });
     */
});

function getMessage(index) {
    if (index == 0) {
        return "“ When I was in class with teacher David, even though it was just for a month, I got to learn a handful of skills. When I got into David’s class I needed to learn everything to get an IELTS score higher than 7 so that I could go to a college, and in those few weeks I got a score higher than what I needed just because he’s got a clear way of teaching where he pointed out my mistakes and gave me ways of fixing them.  It was an entertaining class as well, which to be honest I really liked. ”";
    }
    else if (index == 1) {
        return "“ David is one of the best teachers that I have ever had. His classes are known for the challenging nature of the project based curriculum he designed and for his dynamic teaching style. As a result, his classes were usually full or had a wait list for entry. His dynamic teaching style is truly student centred, and his talent made him an inspiration to many students. I am grateful that he guided me and provided the necessary support to present the IELTS test. David consistently made himself available to the students by listening to them and encouraging them. Everything that I have learned from him will help me to create a successful career in my future. ”";
    }
    else if (index == 2) {
        return "“ I really enjoyed my classes with Teacher David. More than just give the answer, he makes the students think and develop self confidence in English. He is very knowledgeable and he is easy to approach anytime you need. Beyond that, his classes have a good energy and positiveness. I am very thankful for all I have learned with him! ”";
    }
    else if (index == 3) {
        return "“ David is one of those rare individuals who is able to create content that students enjoy so much they often don’t realize how much language they are learning. His teaching style lets students at any age learn in a relaxed and fun environment. In the classroom,  when I was disappointed with myself because I felt that the IELTS course was quite tough for me, he explained it to me clearly until I totally understood, and he made me laugh, too. I tried some tips he gave us, and my confidence recovered. I wholeheartedly appreciated his guidance and support. ”";
    }
    else if (index == 4) {
        return "“ Firstly, he always caught our speaking and writing mistakes. To help us learn, he was able to explain our problems with pronunciation or vocabulary or grammar very clearly, with many examples. He also checked our progress by having one-to-one interviews. Lastly, he was very friendly, like most VGC teachers. He wanted to help me improve my IELTS score, and he was also interested in my life in Vancouver and my plans. He was the best teacher! ”";
    }
}
