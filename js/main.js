
// $(document).ready(function() {
//     $('.header__burger').click(function(event) {
//         $('.header__burger,.header__menu').toogleClass('active');
        // $('body').toogleClass('lock');
//     });

// });


$(function(){

//     $('.gallery__slider').slick({
//         autoplay: true,
//         arrows: false,
//         dots: true,
//         fade: true,
//         pauseOnHover: true,

//     });

    $('.header__btn').on('click', function(){
        $('.menu').toggleClass('menu--active');
        $('.header__btn').toggleClass('header__btn--active');
        $('.body').toggleClass('body--active');
    });
});

$(function(){
        
        $('[data-fancybox]').fancybox({
                youtube: {
                        controls: 1,
                        autoplay: 0
                        // showinfo: 0
                },
        });
});