const breakpoints = {
    xs: 280,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
}


$(document).on('ready', function () {
    $(".product-slider").slick({
        infinite: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        arrow: true,
        responsive: [
            {
                breakpoint: breakpoints.xxl,
                settings: {
                    slidesToShow: 8,
                }
            },
            {
                breakpoint: breakpoints.xl,
                settings: {
                    slidesToShow: 7,
                }
            },
            {
                breakpoint: breakpoints.lg,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: breakpoints.md,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: breakpoints.sm,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: breakpoints.xs,
                settings: {
                    slidesToShow: 2,
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


    // BANNER SLIDER SECTION
    $(".banner-slider").slick({
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 2.3,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

    $(".feed-slider").slick({
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 6,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });


    // BANNER SLIDER SECTION

    const insta = document.querySelectorAll('.feed-slide');

    insta.forEach(e => {
        e.addEventListener('mouseover', () => {
            e.children[0].classList.replace('hidden', 'flex')
            console.log(e)
        })

        e.addEventListener('mouseleave', () => {
            e.children[0].classList.replace('flex', 'hidden')
        })
    })
});
