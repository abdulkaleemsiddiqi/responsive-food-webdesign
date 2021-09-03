$(document).ready(function(){
   $('.food-slider').slick({
      autoplay:true,
     slidesToShow:3,
     slidesToScroll:1,
     prevArrow:".prev-btn",
     nextArrow:".next-btn",
     responsive:[
        {
           breakpoint:992,
           settings:{
            slidesToShow:2,
           }
        },
        {
         breakpoint:768,
         settings:{
          slidesToShow:1,
         }
      }
     ]

   });

   $('.nav-trigger').click(function(){
      $('.site-content-wrapper').toggleClass('scaled');
   })
});


$(".open").on("click", function() {
   $(".popup-overlay, .popup-content").addClass("active");
 });
 
 //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
 $(".close, .popup-overlay").on("click", function() {
   $(".popup-overlay, .popup-content").removeClass("active");
 });


 //email
 // email
 let emailId = document.getElementById("email-id");
let errorMsg = document.getElementById("error-msg");
let icon = document.getElementById("icon_msg");
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

function checker(){
    icon.style.display="inline-block";
    if(emailId.value.match(mailRegex)){
        icon.innerHTML = '<i class="fas fa-check-circle"></i>';
        icon.style.color = '#2ecc71';
        errorMsg.style.display = 'none';
        emailId.style.border = '2px solid #2ecc71';
    }
    else if(emailId.value == ""){
        icon.style.display = 'none';
        errorMsg.style.display = 'none';
        emailId.style.border = '2px solid #5fa0fa';
    }
    else{
        icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        icon.style.color = '#ff2851';
        errorMsg.style.display = 'block';
        emailId.style.border = '2px solid #ff2851';
    }

}

//read more
$(document).ready(function(){
   $(".read").click(function(){
      $(this).prev().toggle();
      $(this).siblings('.dots').toggle();
      if($(this).text()=='read more'){
  $(this).text('read less');
      }
      else{
  $(this).text('read more');
      }
   });

 });


 //gallery filter
 $(document).ready(function(){

   $('.buttons').click(function(){

       $(this).addClass('active').siblings().removeClass('active');

       var filter = $(this).attr('data-filter')

       if(filter == 'all'){
           $('.image').show(400);
       }else{
           $('.image').not('.'+filter).hide(200);
           $('.image').filter('.'+filter).show(400);
       }

   });

   $('.gallery').magnificPopup({

       delegate:'a',
       type:'image',
       gallery:{
           enabled:true
       }

   });

});
