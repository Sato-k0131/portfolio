
/* ===================
    - ページ内リンク
=================== */

// SCROLL
$(function(){
	var headerHeight = $('#header_in').outerHeight();
	var urlHash = location.hash;
	// URLにハッシュが含まれる場合
	if(urlHash) {
		$('body,html').stop().scrollTop(0);
		setTimeout(function(){
			var target = $(urlHash);
			var position = target.offset().top - headerHeight;
			$('body,html').stop().animate({scrollTop:position}, 500, 'swing');
		}, 100);
	}
	// 該当ページのページ内リンクの場合
	$('a[href^="#"]').click(function() {
		var href= $(this).attr("href");
		var target = $(href);
		var position = target.offset().top - headerHeight;
		$('body,html').stop().animate({scrollTop:position}, 500, 'swing');
		return false;
	});
});
	