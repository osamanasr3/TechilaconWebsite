function submit_form() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxsHWja2QzJCtQpR9LzWedX8Ld7XBcnAtyUppq9FWql5Lx3RQ/exec'
    const form = document.forms['submit-to-google-sheet']
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var position = document.getElementById("position").value;
    var companyName = document.getElementById("companyName").value;
    var know = document.getElementById("know").value;
    var valid = validate(firstName,lastName,email,mobile,message,position,companyName,know);
    if(valid){
        element = document.getElementById("buttonsend");
        element.disabled = true;
        element.innerHTML = "sending";
         // alert("Name : " + firstName + " " + lastName + " \nEmail : " + email +
         //     "\nMobile : " + mobile + "\nMessage : " + message);
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(function(){alert('Message sent successfully! We\'ll be in touch soon');
                        element.disabled = false;
                        element.innerHTML = "send";})
        .catch(function(){alert('An error has occured. Please try again later');
                        element.disabled = false;
                        element.innerHTML = "send";})
    }
    event.preventDefault();
}

(function($){
    'use strict';
    //menu options
    var fixed_top = $(".main-menu");
    var fixed_top_two = $(".menu-two");
    var fixed_top_four = $(".menu-four");
    var fixed_top_five = $(".menu-five");
    var fixed_top_six = $(".menu-six");
    var fixed_top_seven = $(".menu-seven");

    //js code for mobile menu
    $('.navbar-toggle').on('click', function(e) {
        $('body').toggleClass('open-mobile-menu')
    });
    $('.close').on('click', function(e) {
        $('body').removeClass('open-mobile-menu')
    });

    $('.mobile-menu>ul>li>a,.mobile-menu ul.mobile-submenu>li>a').on('click', function(e) {
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp(1500,"swing");
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown(1500,"swing");
            element.siblings('li').children('ul').slideUp(1500,"swing");
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp(1500,"swing");
            $('body').removeClass('open-mobile-menu');
        }
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });



    $('#countdown').countdown({
        date: '10/22/2020 17:00:00',
        offset: +2,
        day: 'Day',
        days: 'Days'
    },
    function () {
        // alert('Done!');
    });


	//counter up
    $('.counter').each(function() {
        var $this = $(this),
        countTo = $this.attr('data-count');
        $({ countNum: $this.text()}).animate({
            countNum: countTo
        },
        {
            duration: 2000,
            easing:'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
               $this.text(this.countNum);
               //alert('finished');
            }
        });
    });


	//Product list grid view
	var list = $("#list");
	var grid = $("#grid");
	list.on('click', function(){
	    $('.product-item-grid').animate({opacity:0},function(){
		    $('.grid').removeClass('grid-active');
		    $('.list').addClass('list-active');
		    $('.product-item-grid').attr('class', 'product-item-list shadow');
		    $('.product-item-list').stop().animate({opacity:1});
	    });
	});

	grid.on('click', function(){
	    $('.product-item-list').animate({opacity:0},function(){
		    $('.list').removeClass('list-active');
		    $('.grid').addClass('grid-active');
		    $('.product-item-list').attr('class', 'product-item-grid shadow');
		    $('.product-item-grid').stop().animate({opacity:1});
	    });
	});



    //lightcase
    $('a[data-rel^=lightcase]').lightcase();

    //directional-hover
    $(window).load(function() {
        $('.dh-container').directionalHover();
    });


    //masonery
    jQuery(window).load(function() {
       $('.grid').masonry({
	       // set itemSelector so .grid-sizer is not used in layout
	       itemSelector: '.grid-item',
	       // use element for option
	       columnWidth: '.grid-sizer',
	       percentPosition: true
        })
    });


    //Sponsor one
    var swiper = new Swiper('.sponsor-slider-one', {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: 2000,
        loop: true,
        breakpoints: {
            // when window width is <= 320px
            540: {
              slidesPerView: 1
            },
            // when window width is <= 480px
            640: {
              slidesPerView: 2
            }
        }
    });

    //Sponsor two
    var swiper = new Swiper('.sponsor-slider-two', {
        slidesPerView: 4,
        spaceBetween: 15,
        autoplay: 1500,
        loop: true,
        breakpoints: {
            // when window width is <= 320px
            540: {
              slidesPerView: 1
            },
            // when window width is <= 480px
            640: {
              slidesPerView: 2
            },
            // when window width is <= 767px
            767: {
              slidesPerView: 3
            }
        }
    });

    //Sponsor Three
    var swiper = new Swiper('.sponsor-slider-three', {
        slidesPerView: 5,
        spaceBetween: 15,
        autoplay: 1000,
        loop: true,
        breakpoints: {
            // when window width is <= 320px
            540: {
              slidesPerView: 1
            },
            // when window width is <= 480px
            640: {
              slidesPerView: 2
            },
            // when window width is <= 767px
            767: {
              slidesPerView: 4
            }
        }
    });

    //Sponsor Three
    var swiper = new Swiper('.testimonial-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: 3000,
        loop: true,
    });



    // fashion homepage
    var swiper = new Swiper('.fashion-hp-container', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });



    $('.fb-plus').on('click', function(e) {
        $('.fashion-bottom-content').toggleClass('open')
    });


    // event schedule section start here


	$('.parallax-one').parallax({imageSrc: 'images/11-04-19/paralax2.png'});
    $('.parallax-two').parallax({imageSrc: 'images/11-04-19/paralax.png'});

   // sticky-widget
   $(document).ready(function() {
      $('section .container .sticky-widget').theiaStickySidebar();
   });

    // 1-12-2019
    // testimonial section start here
    var swiper = new Swiper('.testimonial-slider',{
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1200,
        autoplay: 3500,
        loop: true,
        breakpoints: {
            991: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 1,
            }
        },
    });

})(jQuery);

function validate(firstName,lastName,email,phone,message,position,companyName,know){
    var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var phonePattern = /^(010|011|012)[0-9]{8}$/;
    var namePattern = /^[a-zA-Z]{0,15}$/;
    var nationalIDPattern = /^[0-9]{14}$/;
    var firstnameinvalid = false;
    var element;
    var returnValue = true;
    clearFormErrors();

    if(checkEmpty(firstName,lastName,email,phone,message,position,companyName,know)){
        return false;
    }

    if(!(namePattern.test(firstName))){
        element = document.getElementById("error-firstname");
        element.style.display = "block";
        element.innerHTML = "&#10006 Invalid first name"
        firstnameinvalid = true;
        returnValue = false;
    }
    if(!(namePattern.test(lastName))){
        element = document.getElementById("error-lastname");
        element.style.display = "block";
        element.innerHTML = "&#10006 Invalid last name"
        returnValue = false;
    }
    if(!(emailPattern.test(email))){
        element = document.getElementById("error-email");
        element.style.display = "block";
        element.innerHTML = "&#10006 Invalid email"
        returnValue = false;
    }
    if(!(phonePattern.test(phone))){
        element = document.getElementById("error-mobile");
        element.style.display = "block";
        element.innerHTML = "&#10006 Invalid mobile"
        returnValue = false;
    }
    return returnValue;
}
function checkEmpty(firstName,lastName,email,phone,message,position,companyName,know){
    var returnvalue = false;
    var firstIsEmpty = false;
    var element;
    if(firstName == ""){
        element = document.getElementById("error-firstname");
        element.style.display = "block";
        element.innerHTML = "&#10006 Field is required"
        firstIsEmpty = true;
        returnvalue = true;
    }
    if(lastName == ""){
        element = document.getElementById("error-lastname");
        element.style.display = "block";
        element.innerHTML = "&#10006 Field is required"
        returnvalue = true;
    }
    if(email == ""){
        element = document.getElementById("error-email");
        element.style.display = "block";
        element.innerHTML = "&#10006 Field is required"
        returnvalue = true;
    }
    if(phone == ""){
        element = document.getElementById("error-mobile");
        element.style.display = "block";
        element.innerHTML = "&#10006 Field is required"
        returnvalue = true;
    }
    if(message.replace(/\s/g,'') == ""){
        element = document.getElementById("error-message");
        element.style.display = "block";
        element.innerHTML = "&#10006 Field is required"
        returnvalue = true;
    }
    if(position == ""){
        element = document.getElementById("error-company");
        element.style.display = "block";
        element.innerHTML = "&#10006 Field is required"
        returnvalue = true;
    }
    if(companyName == ""){
        element = document.getElementById("error-position");
        element.style.display = "block";
        element.innerHTML = "&#10006 Field is required"
        returnvalue = true;
    }
    if(know == ""){
        element = document.getElementById("error-know");
        element.style.display = "block";
        element.innerHTML = "&#10006 Field is required"
        returnvalue = true;
    }
    return returnvalue;
}
function changeTickets()
{
    var cb  = document.querySelector(".cb");
    var individualTickets = document.querySelector(".individual-tickets");
    var groupTickets = document.querySelector(".group-tickets");
    var title = document.querySelector(".tickets-title");

    if(cb.checked == 1)
    {
        title.innerHTML = "<h3>Event <span class='selected'> Group </span> Tickets</h3>";
        individualTickets.classList.add('hidden');
        groupTickets.classList.remove('hidden');
    }
    else if(cb.checked == 0)
    {
        title.innerHTML = "<h3>Event <span class='selected'> Individual </span> Tickets</h3>";
        individualTickets.classList.remove('hidden');
        groupTickets.classList.add('hidden');
    }
 }

function clearFormErrors(){
    var element;
    element = document.getElementById("error-firstname");
    element.style.display = "None";
    element = document.getElementById("error-lastname");
    element.style.display = "None";
    element = document.getElementById("error-email");
    element.style.display = "None";
    element = document.getElementById("error-mobile");
    element.style.display = "None";
    element = document.getElementById("error-message");
    element.style.display = "None";
    element = document.getElementById("error-company");
    element.style.display = "None";
    element = document.getElementById("error-position");
    element.style.display = "None";
    element = document.getElementById("error-know");
    element.style.display = "None";
}

function submit_mail() {

    event.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxQ71AI1YFjBhrBRhCqjHzxHPIsRL3KQK5o43dyGB9sz76HTDI/exec'
    const form = document.forms['submit-mail']
    var email = document.getElementById("SignUpEmail").value;
    var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(email == ""){
        element = document.getElementById("newsletter_error");
        element.style.display = "block";
        element.innerHTML = "&#10006 Email is required";

    }
    else if(!(emailPattern.test(email)))
    {
        element = document.getElementById("newsletter_error");
        element.style.display = "block";
        element.innerHTML = "&#10006 Invalid Email Entered";
    }
    else{
        element = document.getElementById("signupbutton");
        element.disabled = true;
        element.value = "Signing Up";
        element.style.pointerEvents = "none";
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(
            function(){
                element = document.getElementById("signup-hide");
                element.style.display = "none";
                element = document.getElementById("signup-complete");
                element.style.display = "block";
                //alert('Message sent successfully! We\'ll be in touch soon')
            }
        )
        .catch(
            function(){
                alert('An error has occured. Please try again later');
                element.disabled = false;
                element.value = "Sign Up";
                element.style.pointerEvents = "auto";
            }
        )
    }


}
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
