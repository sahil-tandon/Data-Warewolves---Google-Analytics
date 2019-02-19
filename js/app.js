/***************************** app.js ******************************/

$(document).ready(function(){
	/*Start: Initialize Billboard Carousel*/
	$('.fact-carousel').slick({
		dots: true,
		infinite: false,
		arrows: true,
		adaptiveHeight: true,
		autoplay: false
	});
	/*End: Initialize Billboard Carousel*/

	/*Start: Handle Header Expand/Collapse*/
	$(window).scroll(function(){
        if($(this).scrollTop()>80){
            $('#header').addClass("collapsed");
        }
        else{
            $('#header').removeClass("collapsed");
        }
    });
    /*End: Handle Header Expand/Collapse*/

	/*Start: Return Current Page Name*/
	function getCurrentPage() {
		var currentPage;
		if(window.location.href.indexOf("index.html") > -1){
			currentPage = "Home";
		}
		else if(window.location.href.indexOf("learn.html") > -1){
			currentPage = "Learn Google Analytics";
		}
		else if(window.location.href.indexOf("getcertified.html") > -1){
			currentPage = "Get Certified";
		}
		else{
			currentPage = "Contact Us";
		}
		return currentPage;
	}
	/*End: Return Current Page Name*/

	/*Start: Google Analytics Event Tracking Code*/
	$('.header-logo a').on('click', function(){
		var thisCategory = getCurrentPage(),
			thisHref = $(this).attr("href"),
			thisAction = "Header Logo Click",
			thisLabel = "Home" + " (" + thisHref + ")";

		/*****
			Fire analytics event: ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue])			
		*****/
		ga('send', 'event', thisCategory, thisAction, thisLabel);
	});

	$('.header-links a').on('click', function(){		
		var thisCategory = getCurrentPage(),
			thisHref = $(this).attr("href"),
			thisAction = "Navigation Click",
			thisLabel = $(this).text() + " (" + thisHref + ")";
		
		/*****
			Fire analytics event: ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue])
		*****/
		ga('send', 'event', thisCategory, thisAction, thisLabel);		
	});

	$('.slick-arrow').on('click', function(){
		var thisCategory = getCurrentPage(),
			thisAction = "Slider Arrow Click",
			thisLabel = $(this).hasClass("slick-prev") ? "Previous" : "Next";

		ga('send', 'event', thisCategory, thisAction, thisLabel);
	});

	$('.internal-link, .external-link').on('click', function(){
		var thisCategory = getCurrentPage(),
			thisHref = $(this).attr("href"),
			thisAction = $(this).hasClass("internal-link") ? "Internal Link Click" : "External Link Click",
			thisLabel = $(this).data('title') + " (" + thisHref + ")";
		
		/*****
			Fire analytics event: ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue])
		*****/
		ga('send', 'event', thisCategory, thisAction, thisLabel);
	});
	/*End: Google Analytics Event Tracking Code*/
});