$(document).ready(function(){

    $(window).on('scroll',function(){


         let scrollTop = $(window).scrollTop()

        if(scrollTop > 500){
            $("#back-to-top").show(500);
        }else{
            $("#back-to-top").hide(500);
        }


       
    })


    $("#back-to-top").on('click', function(){
        $('html,body').animate({
            scrollTop: 0
        }, 500
        )
    })








    $('.benner-slider').slick({
        autoplay: true,
        // autoplaySpeed: 200,
        speed: 5000,
        prevArrow: `<i class="fa-solid fa-chevron-left benner-slider-arrow"></i>`,
        nextArrow : `<i class="fa-solid fa-chevron-right benner-slider-arrow"></i>`,
        dots: true,
        dotsClass: 'benner-slider-dots',
        slidesToShow: 2,
      });





















})



