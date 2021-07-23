// Image Tick Box
// replace a checkbox with a image version without losing the functionality
// License: https://www.gnu.org/licenses/lgpl.txt
// Homepage: https://blog.leenix.co.uk/2009/10/jquery-plugin-imagetickbox-change-any.html
// Version 1.00
jQuery.fn.imageTickBox=function(b){var c=jQuery.extend({tickedImage:null,unTickedImage:null,imageClass:null},b);jQuery("<img>").attr("src",c.tickedImage);jQuery("<img>").attr("src",c.unTickedImage);var a=0;jQuery(this).each(function(){a++;if(jQuery(this).attr("checked")){var d=c.tickedImage}else{var d=c.unTickedImage}jQuery(this).hide().before("<img id='tickboxImage"+a+"' src='"+d+"' class='"+c.imageClass+"'>");jQuery("#tickboxImage"+a).click(function(){if(jQuery(this).next().attr("checked")){jQuery(this).attr("src",c.unTickedImage);jQuery(this).next().removeAttr("checked")}else{jQuery(this).attr("src",c.tickedImage);jQuery(this).next().attr("checked","checked")}return false})})};