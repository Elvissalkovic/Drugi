
	$(document).ready(function(){
  		$('.slajder').slick({
   	 

  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
autoplay: true,
 autoplaySpeed: 5000,




 	 });
	});






    $(document).ready(function(){

      $('.slider-pravougaonik').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-krug',
  cssEase: 'linear',
  lazyLoad: 'ondemand',
});
$('.slider-krug').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider-pravougaonik',
  dots: false,
  lazyLoad: 'ondemand',
     
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        
        slidesToShow: 1
      }
    }
  ]
    
});
      
  });



 

  $(document).ready(function(){

$(".banner1").hover(function(){
   document.getElementById("banner1").src="img/Sikonica1.png";
    }, function(){
   document.getElementById("banner1").src="img/ikonica1.png";
});  



$(".banner2").hover(function(){
   document.getElementById("banner2").src="img/Sikonica2.png";
    }, function(){
   document.getElementById("banner2").src="img/ikonica2.png";
});  


$(".banner3").hover(function(){
   document.getElementById("banner3").src="img/Sikonica3.png";
    }, function(){
   document.getElementById("banner3").src="img/ikonica3.png";
});  

$(".banner4").hover(function(){
   document.getElementById("banner4").src="img/Sikonica4.png";
    }, function(){
   document.getElementById("banner4").src="img/ikonica4.png";
});  

$(".banner5").hover(function(){
   document.getElementById("banner5").src="img/Sikonica5.png";
    }, function(){
   document.getElementById("banner5").src="img/ikonica5.png";
});  

$(".banner6").hover(function(){
   document.getElementById("banner6").src="img/Sikonica6.png";
    }, function(){
   document.getElementById("banner6").src="img/ikonica6.png";
});  

$(".banner7").hover(function(){
   document.getElementById("banner7").src="img/Sikonica7.png";
    }, function(){
   document.getElementById("banner7").src="img/ikonica7.png";
});  

$(".banner8").hover(function(){
   document.getElementById("banner8").src="img/Sikonica8.png";
    }, function(){
   document.getElementById("banner8").src="img/ikonica8.png";
});  

$(".banner9").hover(function(){
   document.getElementById("banner9").src="img/Sikonica9.png";
    }, function(){
   document.getElementById("banner9").src="img/ikonica9.png";
});  

$(".banner10").hover(function(){
   document.getElementById("banner10").src="img/Sikonica10.png";
    }, function(){
   document.getElementById("banner10").src="img/ikonica10.png";
});  




});



