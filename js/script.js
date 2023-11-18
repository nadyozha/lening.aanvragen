document.body.onload = function() {
    setTimeout(function() {
        var preloader = document.getElementById('page-preloader');
        if( !preloader.classList.contains('done') )
        {
            preloader.classList.add('done')
        }
    }, 1000);
}


$(function() {

	$('#sandwich').click(function() {
		$('body').toggleClass('menubar-in');
        $('.nav-contente').toggleClass('nav-contente-active');
        $('#sandwich').toggleClass('sandwich-dark');
        $('body').toggleClass('lock');
	});

	$('.menu-close').click(function() {
		$('.menubar-in').removeClass('menubar-in');
        $('body').toggleClass('lock');
	})

    $('#open-animate').click(function() {
        $('.card-range').toggleClass('card-renge-after');
    });



    Waves.attach('.btn-nav', ['waves-button', 'waves-float']);
    Waves.attach('.btn-transp', ['waves-button', 'waves-float']);
    Waves.attach('.btn-white', ['waves-button', 'waves-float']);
    Waves.attach('.btn-blue', ['waves-button', 'waves-float']);
    Waves.attach('.btn-transp-dark', ['waves-button', 'waves-float']);
    Waves.init();




    var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    var svg = '<img class="img-crosss"  src="img/crosss.svg">';
    $('.pop').popover({
        container: 'body',
        content: function () {
            var mysvgdiv=$('<div></div>');
            return mysvgdiv.prepend(text).append(svg);
        },
        placement: 'bottom',
        html: true
    });

    
    



     $('.owl-news').owlCarousel({
        stagePadding: 50,
        loop:false,
        margin:10,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1,
                stagePadding: 0
            },
            374:{
                items:1,
                stagePadding: 45
            },
            600:{
                items:2
            },
            1199:{
                items:3
            }
        }
    })

     $('.owl-logo').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1,
                stagePadding: 20
            },
            374:{
                items:2,
                stagePadding: 20
            },
            575:{
                items:3,
                stagePadding: 30
            },
            991:{
                items:4
            },
            1199:{
                items:5,
                stagePadding: 50
            },
        }
    })


     $owlMain = $('.owl-main');
    function initializeMain() {
      if (window.matchMedia('(max-width: 1199.98px)').matches) {
        $owlMain.addClass('owl-carousel');
        $owlMain.owlCarousel({
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 0
                },
                768: {
                    items: 2,
                },
            },

            dots: false,
            smartSpeed: 1000,
            stagePadding: 50,
            loop:false,

        });

        } else {
            $owlMain.trigger("destroy.owl.carousel").removeClass("owl-carousel owl-loaded");
            $owlMain.find(".owl-stage-outer").children().unwrap();
        }
    }
    $(window).resize(initializeMain);
    initializeMain();
     

});