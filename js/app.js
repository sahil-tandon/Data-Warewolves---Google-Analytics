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

	/*Start: Google Analytics Event Tracking Code*/
	$('.header-links a').on('click', function(e){
		e.preventDefault();		//prevent redirection to requested page
		var thisCategory,
			thisLabel = $(this).text(),
			thisValue = $(this).attr("href");

		if(window.location.href.indexOf("index.html") > -1){
			thisCategory = "Home";
		}
		else if(window.location.href.indexOf("learn.html") > -1){
			thisCategory = "Learn Google Analytics";
		}
		else if(window.location.href.indexOf("getcertified.html") > -1){
			thisCategory = "Get Certified";
		}
		else{
			thisCategory = "Contact Us";
		}
		/*****
			Fire analytics event: ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue])
		*****/
		ga('send', 'event', thisCategory, "Navigation Click", thisLabel, thisValue);

		setTimeout(function(){
			window.location.href = thisValue;	//redirect to requested page
		}, 500);
	});
	/*End: Google Analytics Event Tracking Code*/
});