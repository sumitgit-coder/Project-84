jQuery(document).ready(function(){

	initialize();

	jQuery('.wpcf7-form input[type=text]').blur(function() {
		if(jQuery(this).val() != '') {
			jQuery(this).parent().find('.ok').remove();
			jQuery('<span class="ok"></span>').hide().appendTo(jQuery(this).parent()).fadeIn();
		} else {
			jQuery(this).parent().find('.ok').fadeOut().remove();
		}
	})

	jQuery('.wpcf7-form :checkbox').imageTickBox({
		tickedImage: '',
		unTickedImage: '',
		imageClass: 'tickbox'
	});

	//toggle the header navigation bar's size based on how far into the page we've scrolled
	//360px down is the arbitrary tipping point
	jQuery(window).scroll(function(){
		var st = parseInt(jQuery(window).scrollTop());
		if(st > 250 && !jQuery('header').hasClass('halfsies'))
			jQuery('header').addClass('halfsies');
		else if(st <= 250 && jQuery('header').hasClass('halfsies'))
			jQuery('header').removeClass('halfsies');
	});

	//archive page filter bars move too
	if(jQuery('div.archive-sort').length)
	{
		var astop = jQuery('div.archive-sort').position().top;
		jQuery(window).scroll(function(){
			var h = 64;
			var t = jQuery(window).scrollTop() + h;

			//sticky!
			if(t > astop)
			{
				//do we need to add the sticky class?
				if(!jQuery('div.archive-sort').hasClass('sticky'))
					jQuery('div.archive-sort').addClass('sticky');

				jQuery('div.archive-sort').css('top', h + 'px');
			}
			else
			{
				if(jQuery('div.archive-sort').hasClass('sticky'))
					jQuery('div.archive-sort').removeClass('sticky');
				jQuery('div.archive-sort').css('top', '440px');
			}
		});

		setTimeout(function(){ jQuery(window).scroll(); }, 2250);
	}

	//toggle services lists
	if(jQuery('.services-list').length)
	{
		jQuery('.services-list li').click(function(){
			jQuery(this).children('p').slideToggle();
			jQuery(this).toggleClass('active');
		});
	}

	//toggle dropdown menu
	var slidelock = new Array();
	jQuery('#menu-header li.choice').hover(function(){
		var id = jQuery(this).attr('id');
		var index = jQuery.inArray(id, slidelock);

		//only go through the animation if we aren't locked, or not already animated
		if(0 > index && !jQuery('#' + id + ' ul').is(':visible'))
		{
			//hide any other open menus
			jQuery('#menu-header li.choice ul:visible').css('display','none');

			slidelock.push(id);
			jQuery(this).children('ul').slideDown(400);
			setTimeout(function(){
				delete slidelock[jQuery.inArray(id, slidelock)];

				//if we're not still hovering, slide it out
				if(!jQuery('#' + id).is(':hover'))
					jQuery('#' + id + 'ul').slideUp(100);
			}, 400);
		}
	},
	function(){
		var id = jQuery(this).attr('id');
		var index = jQuery.inArray(id, slidelock);

		if(0 > index)
			jQuery(this).children('ul').slideUp(100);
	});

	//no click for dropdown menu parents
	jQuery('#menu-header li.choice a').click(function(e){
		if(!jQuery(this).parents('.sub-menu').length)
			e.preventDefault();
	});

});