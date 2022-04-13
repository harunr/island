
(function($){
	
	$(function(){
		
		$('.menu a').click(function (e) {
			 e.preventDefault();
            $('.nav-wrap').fadeToggle();
            $('body').toggleClass('navshown');
        })
		
		  if($(".about-section").length){
            $("body").addClass('about-page');
        }

		  if($(".contact-section").length){
            $("body").addClass('contact-page');
        }
        
		 if($(".specials-page ").length){
            $("body").addClass('specials');
        }

		$('.close-icon').click(function (e) {
            e.preventDefault();
           $('.hero-bottom-content-wrap').fadeToggle();
           $('body').toggleClass('.close');
       })
		
	   // ANIMATION CHECK IF IN VIEW
        var $animation_elements = $('.anim-el');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var insetAmount = window_height / 20 // fifth of the screen
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height) - insetAmount;

            $.each($animation_elements, function() {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                }/* else {
                    if(!$element.hasClass('anim-once')) {
                        $element.removeClass('in-view');
                    }
                }*/
            });
        }
        $window.on('scroll orientationchange resize', check_if_in_view);
        $window.trigger('scroll');

        const updateProperties = (elem, state) => {
            elem.style.setProperty('--x', `${state.x}px`)
            elem.style.setProperty('--y', `${state.y}px`)
            elem.style.setProperty('--width', `${state.width}px`)
            elem.style.setProperty('--height', `${state.height}px`)
            elem.style.setProperty('--radius', state.radius)
            elem.style.setProperty('--scale', state.scale)
        }
		
		
		
		
	
        var window_width =  $(window).width();
        var window_height =  $(window).height();

        if ($('.accommodation-item-wrap').length) {
            $('.accommodation-item-wrap').slick({
                arrows:false,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 1500,
                navigation:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true,
                centerMode: false,
                focusOnSelect: true,
            })
        }
		
		
		
		gsap.registerPlugin(ScrollTrigger);

        const locoScroll = new LocomotiveScroll({
            el: document.querySelector(".smooth-scroll"),
            smooth: true,
            
        });
        // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
        locoScroll.on("scroll", ScrollTrigger.update);

        let duration = (window.innerWidth - 600) / 250;
        // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
        ScrollTrigger.scrollerProxy(".smooth-scroll", {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            }, // we don't have to define a scrollLeft because we're only scrolling vertically.
            getBoundingClientRect() {
                return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
            },
            // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
            pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
        });
        
        
        // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

        // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
        ScrollTrigger.refresh();



        $('.accommodation-thumb-overlay').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({ scrollTo: $($(this).attr('href')).offset().top}, 900, 'linear');
        });
		
        
	})// End ready function.
   
    
        
	
 
	
	
	/* Slick needs no get Reinitialized on window Resize after it was destroyed */
    $(window).on('load resize orientationchange', function() {
        $('.carousel-wrap').each(function(){
            var $carousel = $(this);
            / Initializes a slick carousel only on mobile screens /
            // slick on mobile
            if ($(window).width() > 767) {
                if ($carousel.hasClass('slick-initialized')) {
                    $carousel.slick('unslick');
                }
            }
            else{
                if (!$carousel.hasClass('slick-initialized')) {
                    $carousel.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        mobileFirst: true,
                        infinite: true,
                        dots: false,
                        autoplay: true,
                        prevArrow: $('.billing-solutions-section .prev-btn'),
                        nextArrow: $('.billing-solutions-section .next-btn'),
                    });
                }
            }
        });
    });
    // End the solutin card carousel
    
    

	

})(jQuery)

