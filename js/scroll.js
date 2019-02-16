
/* ===================
    - ページ内リンク
=================== */

// SCROLL
$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // ずらしたいY軸方向の値。
      var OFFSET = 90;
      // スムーススクロール
      $('body,html').animate({scrollTop:position-OFFSET}, speed, 'swing');
      return false;
   });
});
