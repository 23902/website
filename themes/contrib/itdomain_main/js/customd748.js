jQuery(function () {
    /*current project carousel*/
    var owl = jQuery('1');
    owl.owlCarousel({
        items: 3,
        loop: true,
        margin: 0,
        autoplay: false,
        dots: false,
        //nav: false,
        slideshowSpeed: 3500,
        animationSpeed: 1000,
        responsiveClass: true,

        responsive: {
            0: {
                items: 1,

            },

            400: {
                items: 1,
            },

            700: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }

    });

    //debugger;
    var owl = jQuery('.banner-slider');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        mouseDrag: false,
        nav: false,
        slideshowSpeed: 7000,
        animationSpeed: 600,
        autoplayHoverPause:true,

    });
    var myCarousel   = jQuery('#doit_flayer');
    var itemFirst    =myCarousel.find('carousel-item').first();
    var itemLast     = myCarousel.find('carousel-item').last();
    var controlLeft  = myCarousel.find('a.left.carousel-control');
    var controlRight = myCarousel.find('a.right.carousel-control');
     
    hideControl();
    
    myCarousel.on('slid.bs.carousel', function() {
      hideControl(); 
    });
    myCarousel.on('slide.bs.carousel', function() {
      showControl(); 
    });
    
    function hideControl() {
      if ( jQuery('#doit_flayer').find('.carousel-item').first().hasClass('active')) {
        controlLeft.css('display', 'none');
      }
      if (jQuery('#doit_flayer').find('.carousel-item').last().hasClass('active') ) {
        controlRight.css('display', 'none');
        myCarousel.carousel('pause');  // stop from cycling through items
      } 
    }
    
    function showControl() {
      if ( jQuery('#doit_flayer').find('.carousel-item').first().hasClass('active') ) {
        controlLeft.css('display', 'block');
      }
      if ( jQuery('#doit_flayer').find('.carousel-item').last().hasClass('active') ) {
        controlRight.css('display', 'block');
      }
    }
    /*service carousel*/
    var owl = jQuery('.service');
    owl.owlCarousel({
        items: 3,
        //    loop: true,  
        margin: 20,
        autoplay: false,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1,
                stagePadding:50,
                margin: 10,
            },
            767: {
                items: 2,

            },
            900: {
                items: 3,

            },
            1200: {
                items: 3,

            }
        }
    });

    var owl = jQuery('.more-services');
    owl.owlCarousel({
        items: 4,
        margin: 20,
        autoplay: false,
        dots: false,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                stagePadding:40,
                margin: 20,

            },

            700: {
                items: 2,
            },

            900: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }

    });

    var owl = jQuery('.key-intiative');
    owl.owlCarousel({
        items: 4,
        //    loop: true,  
        margin: 20,
        autoplay: false,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1,
                stagePadding:50,
                // margin: 30,
            },
            767: {
                items: 2,
                stagePadding: 70,
            },
            900: {
                items: 3,
                stagePadding: 70,
            },
            1200: {
                items: 4,
                stagePadding: 100,
            }
        }


    });
    jQuery(".owl-prev").html('<i class="fas fa-chevron-left"></i>');
    jQuery(".owl-next").html('<i class="fas fa-chevron-right"></i>');

})
/*********Font size resize**********/

var fontSize = 14;
jQuery(document).ready(function() { 
    //console.log(theme);
    if (_getCookie("nccfontSize") != null) {
        var fontSize = _getCookie("nccfontSize");
    } else {
        var fontSize = 14;
    }
    jQuery("body .main, #maincontent").css("font-size", fontSize + "px");
    jQuery("a").css("font-size", fontSize + "px");
  
});
function _deleteCookie(name,path,domain) {
	if (_getCookie(name)) {
		document.cookie = name + "=" +
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		"; expires=Thu, 01-Jan-70 00:00:01 GMT";
	}
}
function _getCookie(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg) {
            return _getCookieVal(j);
        }
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0)
            break;
    }
    return null;
}

function _getCookieVal(offset) {
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1) { endstr = document.cookie.length; }
	return unescape(document.cookie.substring(offset, endstr));
}
function _setCookie(name, value, expires, path, domain, secure) {
    var vurl = true;
    if (path != '' && path != undefined) {
        vurl = validUrl(path);
    }
    if (jQuery.type(name) == "string" && vurl) {
        // document.cookie = name + "=" + escape(value)  +
        //     ((expires) ? "; expires=" + expires.toGMTString() : "") +
        //   ((path) ? "; path=" + "/" : "") +
        //     ((domain) ? "; domain=" + domain : "") +
        //      ((secure) ? "; secure" : "");
        document.cookie = name + "=" + (value || "")  +   ((expires) ? "; expires=" + expires.toGMTString() : "") + ((domain) ? "; domain=" + domain : "")   + "; path=/";
    }
}

function setFontSize(fontType) {

    if (fontType == "plus") {
            if (fontSize <= 15) {
                fontSize = parseInt(fontSize) + 1 ;
            }
            
            
    if (fontSize > 16) {
                fontSize = parseInt(fontSize) + 1;
            }		
        } else if (fontType == "minus") {
            if (fontSize > 12) {
                fontSize = parseInt(fontSize) - 1+1;
                
            }
       
            if (fontSize > 12) {
                
                fontSize = parseInt(fontSize) - 1;
                   
            }  
           
        }
        
        else {
            fontSize = 14;
         
        }
        
        _setCookie("nccfontSize", fontSize);
        jQuery("body .main, #maincontent").css("font-size", fontSize + "px");
        jQuery("a").css("font-size", fontSize + "px");
        
    
    }
  

    jQuery(function () {
        setNavigation();
    });
function setNavigation() {
    var path = window.location.pathname;
    path = path.replace(/\/jQuery/, "");
    path = decodeURIComponent(path);

    jQuery(".region-sidebar-first a").each(function () {
        var href = jQuery(this).attr('href');
        if (location.pathname === href) {
            jQuery(this).closest('li').addClass('active');
            jQuery('.region-sidebar-first li.dropdown-item.active,.region-sidebar-first li.nav-item.active').parents('ul.dropdown-menu').css('display','block');
            jQuery('.region-sidebar-first li.dropdown-item.active,.region-sidebar-first li.nav-item.active').parents('ul.dropdown-menu').addClass('parent-active');
            jQuery(this).parents('.parent-active').parent('li').addClass("child-activate show");
            jQuery(".child-activate.show > a").addClass("highlighted text-dark bg-light");
        }
       
    });
}

function setTheme(style){
    var path = window.location.origin;
    var theme = path + '/themes/contrib/itdomain_main/css/';
    activetheme = _getCookie("ncctheme")+'.css';
    if(style == "darkvariable"){
        if(activetheme!='darkvariable.css'){
            theme += 'darkvariable.css';                      
            _setCookie("ncctheme", style);
        jQuery( "head" ).append( '<link id="theme_css" rel="stylesheet" href="'+ theme +'">' );
    }
}
    else{
        theme += 'style.css';
        _deleteCookie('ncctheme','/');
        jQuery("#theme_css").remove();

        if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)){
            location.reload();
    } 
    
    }
 
}  
jQuery(document).ready(function() {
 
    var path = window.location.origin;
    //alert(path);
    var theme = path + '/themes/contrib/itdomain_main' + '/css/';
    
    if(_getCookie("ncctheme") =='darkvariable' ){
        theme += _getCookie("ncctheme")+'.css';
        jQuery( "head" ).append( '<link id="theme_css" rel="stylesheet" href="'+ theme +'">' );
    }
    else{
        theme += 'style.css';
        _deleteCookie('ncctheme','/');
        jQuery("#theme_css").remove();
      
    }

}); 

jQuery('a').not(".mfp-iframe").filter(function () {
    if(jQuery(this).attr("target")=="_blank"){
        jQuery(this).attr('rel', 'noopener noreferrer');
    }
    return this.hostname && this.hostname !== location.hostname;
}).addClass("external");
jQuery('.external').click(function () {
    return confirm('This link shall take you to a page outside the website. For any query regarding the content of the linked page, please contact the webmaster of the concerned website.');
});
jQuery('a').filter(function() {
    return this.hostname && this.hostname !== location.hostname; 
 }).attr('target','blank');
jQuery("#skip_btn").click(function (event) {
    event.preventDefault();
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    jQuery('html, body').animate({
        scrollTop: jQuery("#maincontent").offset().top
    }, 500, function () {
    });
    
});
jQuery('.return-to-top').hide(0)

jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 100) {
        jQuery('.return-to-top').fadeIn(200);
    } else {
        jQuery('.return-to-top').fadeOut(300);
    }
});
jQuery('.return-to-top').click(function () {
    event.preventDefault();

    jQuery('html , body').animate({
        scrollTop: 0
    }, 800);
});
/* SCROLL TO BOTTOM JS END */

function clickHandle(evt, animalName) {
    let i, tabcontent, tablinks;

    // This is to clear the previous clicked content.
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Set the tab to be "active".
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Display the clicked tab and set it to active.
    document.getElementById(animalName).style.display = "block";
    evt.currentTarget.className += " active";
}

jQuery(".humburger-ico ").click(function () {
    jQuery(".menu-bar").addClass("animating");
    jQuery(".humburger-ico").hide();
    jQuery(".closemenu").show();
});
jQuery(".closemenu").click(function () {
    jQuery(".menu-bar").removeClass("animating");
    jQuery(".humburger-ico").show();
    jQuery(".closemenu").hide();
});

//vedio popup js
jQuery('.gallery').each(function () { // the containers for all your galleries
    jQuery(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
            enabled: true
        }
    });
  
});
if(!jQuery('body').hasClass('path-user')){
    var target = jQuery('.menu-bar').offset().top;
        jQuery(window).scroll(function() {
            if (jQuery(window).scrollTop() > target) {
            jQuery('.menu-bar').addClass('sticky');
            } else {
            jQuery('.menu-bar').removeClass('sticky');
        }
    });
    }
jQuery(document).ready(function ($) {
    jQuery('.newslider').breakingNews({
        // stopOnHover:false

    });
})
jQuery('<div class="bn-controls"><button tabindex="0"><span class="bn-arrow bn-prev" tabindex="0"></span></button><button tabindex="0"><span class="bn-action" tabindex="0"></span></button><button tabindex="0"><span class="bn-arrow bn-next" tabindex="0"></span></button></div>').insertAfter( '.newslider .bn-news');




function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false}, 'google_translate_element');
   }
if(jQuery("div[id^='block-views-block-home-page-popup-block']").hasClass("block-views-blockhome-page-popup-block-1")){
    jQuery('#myModal').modal('show');
 
}
// Change blocked user message on wrong captcha
var wrc_msg = jQuery("body.path-user div[role=alert] ul li:nth-child(2)").text()
var wrc_string = "has not been activated or is blocked."
if(wrc_msg.indexOf(wrc_string) != -1){
    jQuery("body.path-user div[role=alert] ul li:nth-child(2)").html("<strong>Login Failed</strong><br>You have exceeded the allowed limit of login attempts. Please contact Support at <a href='mailto:dit-helpdesk@amitysoftware.com'>dit-helpdesk@amitysoftware.com</a>")
}
// Change blocked user message
var wrc_msg = jQuery("body.path-user div[role=alert]").text()
var wrc_string = "has not been activated or is blocked."
if(wrc_msg.indexOf(wrc_string) != -1){
    jQuery("body.path-user div[role=alert]").html("<strong>Login Failed</strong><br>You have exceeded the allowed limit of login attempts. Please contact Support at <a href='mailto:dit-helpdesk@amitysoftware.com'>dit-helpdesk@amitysoftware.com</a>")
}
if(jQuery('form').hasClass('views-exposed-form')){
    expposed_filter()
 
}
 function expposed_filter(){
    exposed_ele_length=jQuery('[id^=webform-submission-field-filter]').length;
    if( exposed_ele_length==0){
        exposed_ele_length=jQuery('[id^=views-exposed-form] .js-form-item').length;
    }
    if(exposed_ele_length==2){
        jQuery('.views-exposed-form').addClass('two-element');
    }else if(exposed_ele_length==3){
        jQuery('.views-exposed-form').addClass('three-element');
    }    else if(exposed_ele_length==4){
         jQuery('.views-exposed-form').addClass('four-element');
     } 
 }
(function ($) {
    $(document).ajaxStop(function() {
        expposed_filter()
    });  
}(jQuery));
//# Breadcrumb
if(jQuery('body').hasClass('path-user')){
}
else{
    jQuery(".region-primary-menu nav").addClass("main-nav");
    jQuery('.region-breadcrumb').remove();
    jQuery(function() {
        jQuery('#breadcrumbs').breadcrumbsGenerator();
    });
    jQuery(document).ready(function ($) {
        var curr_url = location.href;
        var lang = curr_url.split('/')[3];
        if(lang == 'hi'){
        jQuery('#breadcrumbs').prepend("<span><a href='/'>मुख पृष्ठ</a></span>");
        }
        else if(lang == 'san'){
        jQuery('#breadcrumbs').prepend("<span><a href='/'>गृह-पृष्ठम्</a></span>");
        }
        else{
        jQuery('#breadcrumbs').prepend("<span><a href='/'>Home</a></span>");   
        }
        jQuery('#breadcrumbs span a').removeAttr("class data-toggle");
        jQuery('#breadcrumbs span a').append('/');
    })
}
//# Breadcrumb
// Device width detection
var device_wid = jQuery(window).width();
var device_hig = jQuery(window).height();
if(device_wid < 481){
jQuery('.view-home-page-banner.view-display-id-block_1').remove();
}
else{
jQuery('.view-home-page-banner.view-display-id-block_3').remove();
}
//# Device width detection
// Forget password link
var forgetText = jQuery("body.path-user .messages--error a").text();
if(forgetText == 'Forgot your password?'){
    jQuery(".messages--error a").remove();
}
//Left Navigation Toggle 
if (window.matchMedia('(max-width: 767px)').matches) {
    jQuery(".region-sidebar-first h2, .region-featured-one h2").addClass('radius');
    jQuery(".region-sidebar-first .navbar-nav").css('display','none');
jQuery(".region-sidebar-first h2,.region-featured-one h2").click(function(){
    jQuery(".region-sidebar-first .navbar-nav").toggle(); 
    jQuery(this).toggleClass("radius");
  });
}
//Left Navigation Toggle 
//back navigation
// function disableBack() {
//                 window.history.forward()
//             }
//             window.onload = disableBack();
//             window.onpageshow = function(e) {
//                 if (e.persisted)
//                     disableBack();
//             }
