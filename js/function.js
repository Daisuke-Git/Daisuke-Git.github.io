$(function(){

  navActive();

    var $this = $(this);

    function navActive(){

      var $navItem = $('.nav__item > a');

       $navItem.on('click',function(){

         if(!$navItem.hasClass('active')){

           $(this).addClass('active');

         }else{

           $navItem.removeClass('active');
           $(this).addClass('active');

         }

       });

      }
     
});
