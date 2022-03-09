$(document).ready(function(){
    $('.slider').slick({
        adaptiveHeight: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        speed: 700,
        infinite: false, 
        draggable: false,
        waitForAnimate: true,
        mobileFirst: true,
        responsive:[
            {  
                breakpoint: 319,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 413,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },  
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }, 
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            }, 
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                }
            },     
        ],
    });
});