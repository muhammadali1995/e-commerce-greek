const insta = document.querySelectorAll('.insta-hover a');

insta.forEach(e => {
    e.addEventListener('mouseover', () => {
        e.children[0].classList.replace('hidden', 'flex')
        console.log(e)
    })

    e.addEventListener('mouseleave', () => {
        e.children[0].classList.replace('flex', 'hidden')
    })
})

$(document).on('ready', function () {
    $(".slickWrapper").slick({
        infinite: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        arrow: true,
        responsive: [{
            breakpoint: 1324,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1920,
            settings: {
                slidesToShow: 8,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
            }
        }
        ]
    });
    $('.slide-prev').click(function (e) {
        console.log(this, e)
        $('.slickWrapper').slick('slickPrev');
    })

    $('.slide-next').click(function (e) {
        console.log(this, e)
        $('.slickWrapper').slick('slickNext');
    })
});

$(document).on('ready', function () {
    $(".slickWrapper2").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerMode: true
    });
});