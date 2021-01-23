// Anonymous "self-invoking" function
(function () {
    // inserted .btn-overlay class in this code for screen 66 77 78
    $(".details-view, .btn-overlay").click(function () {

        $(this).parents('.tab-pane.active').find(".detailed-content").addClass("d-flex");

    });

    $('.hide-this').click(function () {
        $(this).parents('.tab-pane.active').find(".detailed-content").removeClass("d-flex");

    });

    // screen 66 77 78
    $("#project-gallery").owlCarousel({
        nav: true,
        items: 1,
        dots: 0,
        margin: 10,
        navText: ["<div class='nav-btn prev-slide'><img class='img-fluid' src='assets/img/left-arrow.svg' /></div>", "<div class='nav-btn next-slide'><img class='img-fluid' src='assets/img/right-arrow.svg' /></div>"],
    });

    //  screen 72-74-75-76-86 

    $('#navbarResponsive .navbar-nav a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    $("#navbarResponsive .nav-tabs .nav-link").click(function () {
        var found = $(this).parents(".nav-tabs").find(".active");
        if (found) {
            $(".tab-newpages.tab-content").addClass("overlay-tabs");
            $(".main-content-area .tab-content").removeClass("overlay-tabs");
            $(".right-sidebar .nav-tabs").find(".active").removeClass("active");
        } else {
            $(".tab-newpages.tab-content").removeClass("overlay-tabs");
        }
    });
    $(".brief-view").dblclick(function () {
      
        var $panel = $(this).prev();
       if(!$panel.length == 0){
      console.log($(this).index());
      var rowHeight = $(this).outerHeight();
      var row = 0;
           for(i=1; i <= $(this).index(); i++ ){
               row = row + rowHeight;
           }
         
           $(this).parents('tbody').animate({
           scrollTop:  row 
       }, 300); 
      
      }
       $(this).find('.td-brief-display').addClass('table-cell');
       $(this).find('.td-brief-display').siblings().addClass('d-none');
       $(this).siblings().find('.td-brief-display').removeClass('table-cell');
       $(this).siblings().find('.d-none').removeClass('d-none');
  
   });
    $('.brief-close').click(function () {
        $(this).parents('.td-brief-display').removeClass('table-cell');
        $(this).parents('.td-brief-display').siblings().removeClass('d-none');
    });

 

    $('.tab-subscribe-dialog').click(function () {
        $(this).parents('.tab-pane.active').find(".subscribe-dialog").removeClass("d-none");

    });
    $(".tab-close.tab-subscribe").click(function () {
        $(this).parents('.tab-pane.active').find(".subscribe-dialog").addClass("d-none");
    });

    /* Screen 79 80  */
    $('.design-col').on('mouseenter', function () {

        $(this).addClass("width50").siblings().addClass('width25');

        if ($(this).find("#outside-gallery")) {
            $(this).find("#outside-gallery").trigger('destroy.owl.carousel');
            $(this).find("#outside-gallery").owlCarousel({
                items: 1,
                dots: 0,
                margin: 10,
                navText: ["<div class='nav-btn prev-slide'><img class='img-fluid' src='assets/img/left-arrow.svg' /></div>", "<div class='nav-btn next-slide'><img class='img-fluid' src='assets/img/right-arrow.svg' /></div>"],
                nav: 1
            });

        }
        if ($(this).find("#outside-gallery")) {
            $(this).siblings('.width25').find("#outside-gallery").trigger('destroy.owl.carousel');
            $(this).siblings('.width25').find("#outside-gallery").owlCarousel({
                items: 1,
                dots: 0,
                margin: 10,
                navText: ["<div class='nav-btn prev-slide'><img class='img-fluid' src='assets/img/left-arrow.svg' /></div>", "<div class='nav-btn next-slide'><img class='img-fluid' src='assets/img/right-arrow.svg' /></div>"],
                nav: 0
            });
        }

        if ($(this).find("#interior-gallery")) {
            $(this).find("#interior-gallery").trigger('destroy.owl.carousel');
            $(this).find("#interior-gallery").owlCarousel({
                items: 1,
                dots: 0,
                margin: 10,
                navText: ["<div class='nav-btn prev-slide'><img class='img-fluid' src='assets/img/left-arrow.svg' /></div>", "<div class='nav-btn next-slide'><img class='img-fluid' src='assets/img/right-arrow.svg' /></div>"],
                nav: 1
            });
            $(this).siblings('.width25').find("#interior-gallery").trigger('destroy.owl.carousel');
            $(this).siblings('.width25').find("#interior-gallery").owlCarousel({
                items: 1,
                dots: 0,
                margin: 10,
                navText: ["<div class='nav-btn prev-slide'><img class='img-fluid' src='assets/img/left-arrow.svg' /></div>", "<div class='nav-btn next-slide'><img class='img-fluid' src='assets/img/right-arrow.svg' /></div>"],
                nav: 0
            });
        }

    });
    $('.design-col').on('mouseleave', function () {

        $(this).removeClass("width50").siblings().removeClass('width25');


        if ($("#outside-gallery")) {
            $("#outside-gallery").trigger('destroy.owl.carousel');
            $("#outside-gallery").owlCarousel({
                items: 1,
                dots: 0,
                margin: 10,
                // navText: ["<div class='nav-btn prev-slide'><img class='img-fluid' src='assets/img/left-arrow.svg' /></div>", "<div class='nav-btn next-slide'><img class='img-fluid' src='assets/img/right-arrow.svg' /></div>"],
                nav: 0
            });
        }
        if ($("#interior-gallery")) {
            $("#interior-gallery").trigger('destroy.owl.carousel');
            $("#interior-gallery").owlCarousel({
                items: 1,
                dots: 0,
                margin: 10,
                // navText: ["<div class='nav-btn prev-slide'><img class='img-fluid' src='assets/img/left-arrow.svg' /></div>", "<div class='nav-btn next-slide'><img class='img-fluid' src='assets/img/right-arrow.svg' /></div>"],
                nav: 0
            });
        }

    });
    $('#design-tab').click(function () {
        designs();
    });
    $(window).resize(function(){
        designs();
        specifications();
        locationMap();
    });
    function designs(){
         var classFound = $('#design-tab').parents('.nav-item').find('.active');
        var theHeight = $('#designs').parents('.main-content-area').outerHeight() - 2;
        if (classFound) {
            $('.the-architect').css('height', theHeight + 'px');
        }
    }
     function specifications(){
         var classFound = $('#design-tab').parents('.nav-item').find('.active');
        var theHeight = $('#designs').parents('.main-content-area').outerHeight() - 2;
        if (classFound) {
            $('.the-architect').css('height', theHeight + 'px');
        }
    }
    
    
    $("#outside-gallery, #interior-gallery").owlCarousel({
        nav: 0,
        items: 1,
        dots: 0,
        margin: 10,
        navText: ["<div class='nav-btn prev-slide'><img class='img-fluid' src='assets/img/left-arrow.svg' /></div>", "<div class='nav-btn next-slide'><img class='img-fluid' src='assets/img/right-arrow.svg' /></div>"],
    });
    // Screens 57 onwards 
    $('.accordion-filter-container button.btn-link').click(function () {
        if ($(this).parents('.card-header').find('.collapsed')) {
            $(this).parents('.card-header').toggleClass('not-collapsed');
            $(this).parents('.card').siblings().find('.card-header').removeClass('not-collapsed');
            $(this).parents('.card').find('.card-body').addClass('mh-280');
        } else {
            $(this).parents('.card-header').removeClass('not-collapsed');
        }
    });
    panel_bg();

    function panel_bg() {
        $('.accordion-filter-container button.btn-link:not(.collapsed)').parents('.card-header').addClass('not-collapsed');
    }
    // nested Accordion 
    $('.nested-accordion').find('.comment').slideUp();
    $('.nested-accordion').find('h3').click(function () {
        $(this).next('.comment').slideToggle();
        $(this).toggleClass('selected');
        $(this).parents('.card').addClass('filter-opened');
        $(this).parents('#location-filter').addClass('location-filter-before');
        $(this).parents('.col-md-4').addClass('position-static');
        $(this).parents('.nested-accordion').siblings().find('.comment').slideUp();
        $(this).parents('.nested-accordion').siblings().find('h3').removeClass('selected');
        $(this).parents('.card').find('.card-body').removeClass('mh-280');
    });
    $('.tab-section-close').click(function () {
        $(this).parents('.card').find('.nested-accordion').find('.comment').slideUp();
        $(this).parents('.card').find('.nested-accordion h3').removeClass('selected');
        $(this).parents('.card').removeClass('filter-opened');
        $(this).parents('#location-filter').removeClass('location-filter-before');
        $(this).parents('.col-md-4').removeClass('position-static');
        $(this).parents('.card').find('.card-body').addClass('mh-280');
    });
    $('#specifications-tab').click(function () {
            specifications();
    });
    function specifications(){
 var classFound = $('#specifications-tab').parents('.nav-item').find('.active');
        var theHeight = $('#specifications').parents('.main-content-area').outerHeight()-2;
        if (classFound) {
            $('.location-map').css('height', theHeight + 'px');
        }
    }
    $('#location-tab').click(function () {
       locationMap()

    });
    function locationMap() {
 var classFound = $('#location-tab').parents('.nav-item').find('.active');
        var theHeight = $('#the-location').parents('.main-content-area').outerHeight() - 2;
        if (classFound) {
            $('#mapLocation').css('height', theHeight + 'px');
        }
    }

    // toggle right Menu on nav-link click
    var eventFired = 0;

if ($(window).width() < 768) {
     $('.right-sidebar a.nav-link').on('click', function () {
       $(this).parents('.right-sidebar').removeClass('open');
      });

}
else {
   // alert('More than 960');
    eventFired = 1;
}

$(window).on('resize', function() {
    if (!eventFired) {
        if ($(window).width() < 768) {
            $('.right-sidebar a.nav-link').on('click', function () {
       $(this).parents('.right-sidebar').removeClass('open');
      });
        } else {
           // alert('More than 960 resize');
        }
    }
});
   


    // Anonymous "self-invoking" function closes
})();