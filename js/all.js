$(function () {
    //footer gotop btn
    $('#gotop').click(function (e) {
        $('html,body').animate({
            scrollTop: 0
        }, 800)
        e.preventDefault();
    })

    // animate inner link
    $('.animate__innerLink').click(function (e) {
        // 取得連結hash#後的id名，為JS元素
        let id = e.target.hash;
        // 取出該ID相對於視窗的距離，要加$()轉為JQ元素
        let idTop = $(id).offset().top
        $('html,body').animate({
            scrollTop: idTop,
        }, 800)
        e.preventDefault()
    })

    // lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'disableScrolling': true,
        'fadeDuration': 300,
        'imageFadeDuration': 300,
        'positionFromTop': 100,
    })
})

$(window).on('load', function () {
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    $('.portfolioFilter-menu > li > a').click(function () {
        console.log('e');

        $('.portfolioFilter-menu > li .current').removeClass('current');
        $(this).addClass('current');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

});
if(document.getElementById('app')) {
    const em = new Vue({
        el: '#app',
        data: {
            message: 'Hello world!'
        },
        created: function(){
            this.indexSlide()
        },
        methods: {
            indexSlide: function (){
                console.log(555)
                var mySwiper = new Swiper('.swiper-container', {
                    // Optional parameters
                    direction: 'vertical',
                    loop: true,

                    // If we need pagination
                    pagination: {
                        el: '.swiper-pagination',
                    },

                    // Navigation arrows
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },

                    // And if we need scrollbar
                    scrollbar: {
                        el: '.swiper-scrollbar',
                    },
                })
            }
        }
    })
}