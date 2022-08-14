import $ from "jquery";
import slick from 'slick-carousel';

<<<<<<< HEAD
$(document).on('ready', function () {
=======
$(window).on('load', function () {
    const breakpoints = {
        xs: 280,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536,
    }

    console.log('ready')
>>>>>>> main
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

    $('.slide-prev').on('click', function () {
        $('.slickWrapper').slick('slickPrev');
    })

    $('.slide-next').on('click', function () {
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
                breakpoint: breakpoints.md,
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
                breakpoint: breakpoints.md,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });

    // BANNER SLIDER SECTION
    const instaPosts = document.querySelectorAll('.feed-slide');

    instaPosts.forEach(post => {
        post.addEventListener('mouseover', () => {
            post.children[0].classList.replace('hidden', 'flex')
        })

        post.addEventListener('mouseleave', () => {
            post.children[0].classList.replace('flex', 'hidden')
        })
    })
<<<<<<< HEAD



    // MENU
    const menuBtn = document.getElementById('menuBtn')
    const menuCloseBtn = document.getElementById('menuCloseBtn')
    const menubar = document.getElementById('menubar')
    const dropdownItems = document.querySelectorAll('.dropdown')
    menuBtn.addEventListener('click', () => {
        menubar.classList.toggle('hidden')
    })

    menuCloseBtn.addEventListener('click', () => {
        menubar.classList.add('hidden')
    })
    console.log(dropdownItems)
    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            dropdownItems.forEach(e => e.removeAttribute('style'))
            item.setAttribute('style', 'color:#009289 !important;')
        })
    })
    // MENU
});
=======
});

>>>>>>> main
