// jQuery(document).ready(function(){

//     var a = 1;

//     $("#index-left-btn").click(function(e){

//         e.preventDefault();

//         $("#index-video video").eq(0).animate({
//             marginLeft : a*"-100"+"%"
//         },1000);

//         a++;

//         if(a == 4)(a = 0);
//         console.log(a);
//     });



//     $("#index-right-btn").click(function(e){

//         e.preventDefault();

//         $("#index-video video").eq(0).animate({
//             marginLeft : a*"100"+"%"
//         },1000);
        
//         a--;

//         if(a == -4)(a = 0)
//         console.log(a);
//     });
// });

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
