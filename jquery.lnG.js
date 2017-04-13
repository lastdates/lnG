/**
 * lnG 1.0
 * HTML if else for grammar in language
 *
 * Copyright 2017, Atul Gupta
 * Licensed under the MIT license.
 * https://github.com/lastdates/lnG
 *
 * Date: Thu Apr 14 2017 23:41:11 GMT+0530 (IST)
 */

(function($){
	$.fn.lng = function(_v){
		return this.each(function(){
			var _lng = $(this);
			_v = _v || _lng.attr("v");
			if( _lng.attr("v:") === undefined ) _lng.attr( "v:", _lng.text() );
			_lng.text( ( _lng.attr("v:" + _v) === undefined ) ? _lng.attr("v:") : _lng.attr("v:" + _v) );
		});
	}
	$(document).ready(function(){
		$("lng").lng();
	});
})(jQuery);
