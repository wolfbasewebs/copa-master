// JavaScript Document
$(document).ready(function(){
    "use strict";
$(document).on('click','.nav-link', function(event) {
    event.preventDefault();
    var target = "#" + this.getAttribute('data-target');   
    // -130 for navbar-fixed otherwise you can use 0 instead
    var top = $(target).offset().top - 100; 
    $('html, body').animate({
        scrollTop: top
    }, 3000);
});
/*-----------------------------------------------------------------------------------*/
/* MENU (For fixed Navbar for both blue and orange version)
/*-----------------------------------------------------------------------------------*/

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
      if (scroll > 70) {
        $(".navbar-bg").css("background" , "#fff");        
        $(".navbar-bg").css("box-shadow","0 20px 30px rgba(0,0,0,.15)");
        
      }

      else{
          $(".navbar-bg").css("background" , "none");
       
          $(".navbar-bg").css("box-shadow","none");
      }
  
});
  /*****************************************************
  * 
  * Flex Slider
  *
  *****************************************************/
 
});