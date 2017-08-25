$(document).ready(function() {

  $(".check-box").click(function(){
    $(".g").toggleClass("g-hide");
  });
  $(".menu-btn").click(function(){
    $(".sidebar").toggleClass("show-sidebar");
  });
  $(".close-menu").click(function(){
    $(".sidebar").removeClass("show-sidebar");
  });
  // $(".item-sidebar").click(function(){
  //   $(".sidebar").removeClass("show-sidebar");
  // });
});