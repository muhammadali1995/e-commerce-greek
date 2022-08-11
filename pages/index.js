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
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 8,
        responsive: [{
                breakpoint: 1324,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });
});