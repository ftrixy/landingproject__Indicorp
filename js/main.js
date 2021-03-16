
$(function(){

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