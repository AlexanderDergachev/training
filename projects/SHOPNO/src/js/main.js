$(document).ready(function(){
    $('#about__carousel').owlCarousel({
        loop:true,
        startPosition: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true, 
        // dotsContainer: '#carousel-custom-dots',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});

$(document).ready(function(){

    $('#testimonials__carousel').owlCarousel({
        loop:true,
        startPosition: 2,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true,
        nav: true,
        navText: ["<img src='images/testimonials-img/arrow-left.svg'>","<img src='images/testimonials-img/arrow-right.svg'>"],
        // dotsContainer: '#carousel-custom-dots',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});