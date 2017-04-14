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
			var _el = $(this);
			_v = _v || _el.attr("v");
			if( _el.attr("v:") === undefined ) _el.attr( "v:", _el.text() );
			_el.text( ( _el.attr("v:" + _v) === undefined ) ? _el.attr("v:") : _el.attr("v:" + _v) );
		});
	}
	$(document).ready(function(){
		$("lng").lng();
	});
})(jQuery);
