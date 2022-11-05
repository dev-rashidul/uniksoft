$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots : false,
    navText : ["<img src='../../assets/images/chevron-left.svg'>", "<img src='../../assets/images/chevron-right.svg'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})