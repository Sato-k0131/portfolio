
/* ===================
    - NAVIGATION
=================== */

// SP-TGGL
$(function(){
  $(document).ready(function() {
    $("#sp_navi_btn").on('click', function() {
      $(this).next().slideToggle();
    });
    $('.sp_navi_li a').on('click', function() {
      $(".sp_navi_li").slideUp()
    });
  });
});
