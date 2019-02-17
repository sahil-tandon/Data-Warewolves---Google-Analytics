/***************************** app.js ******************************/

$(document).ready(function(){	
	/*Start: Initialize Billboard Carousel*/
	$('.billboard-carousel').slick({
		dots: true,
		infinite: true,
		arrows: true,
		adaptiveHeight: true,
		autoplay: true
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
	$('.header-logo a').on('click', function(e){
		var thisCategory = getCurrentPage(),
			thisHref = $(this).attr("href"),
			thisLabel = "Header Logo" + " (" + thisHref + ")";

		/*****
			Fire analytics event: ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue])			
		*****/
		ga('send', 'event', thisCategory, "Navigation Click", thisLabel);
	});

	$('.header-links a').on('click', function(e){
		e.preventDefault();		//prevent redirection to requested page
		var thisCategory = getCurrentPage(),
			thisHref = $(this).attr("href"),
			thisLabel = $(this).text() + " (" + thisHref + ")";
		
		/*****
			Fire analytics event: ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue])
		*****/
		ga('send', 'event', thisCategory, "Navigation Click", thisLabel);

		window.location.href = thisHref;	//redirect to requested page
	});
	/*End: Google Analytics Event Tracking Code*/
});