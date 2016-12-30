/**
 * Nav Highlighting
 *
 *	Automatically highlights the visible anchored elements
 *
 *		Inspiration
 *			http://www.phptherightway.com/
 *
 * @author		David King
 * @copyright	Copyright (c) 2013 +
 */
(function($){
	function highlight(){
		var id;
		var visible	= [];
		var lastID	= false;
		// Viewport
		var viewT = $(window).scrollTop();
		var viewB = viewT + $(window).height();
		// Loop all Headings to see if they are visible
		$('h1 a, h2 a, h3 a, h4 a').each(function(){
			// MUST have an id...
			if(id = $(this).attr('id')){
				// Grab the element position
				var elT = $(this).offset().top;
				var elB = elT + $(this).height();
				// If we're within the top of the viewport then start thinking
				if(elB >= viewT){
					// If we're off the bottom of the viewport...
					if(elT >= viewB){
						// ...and NOTHING has been added...
						if(!visible && lastID){
							visible.push(lastID || id);
						}
						return false;
					}
					// Add this element
					visible.push(id);
				}
				// Store this "element" for the next pass...
				lastID = id;
			}
		});
		// Highlight
		$('#nav a').removeClass("active first");
		$('#nav a[href="#'+visible.shift()+'"]').addClass("first");
		$(visible).each(function(k,v){
			$('#nav a[href="#'+v+'"]').addClass("active");
		});
	}

	// Add a scroll and resize listener
	$(window).scroll(highlight).resize(highlight);

	// Trigger the highlight on load
	highlight();
})(jQuery);