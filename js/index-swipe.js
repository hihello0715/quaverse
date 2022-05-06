jQuery(document).ready(function(){

    var a = 1;
    // $("#index-left-btn").click(function(e){
    //     e.preventDefault();


    //     $("#index-video video").eq(0).stop().animate({
    //         marginLeft : "-100"*a+"%"
    //     },1000);

    //     a++;

    //     console.log(a);
    //     if(a>=video.length)(a=0);
    // });


    // $("#index-right-btn").click(function(e){
    //     e.preventDefault();


    //     $("#index-video video").eq(0).stop().animate({
    //         marginLeft : "100"*a+"%"
    //     },1000);

    //     a--;

    //     console.log(a);
    //     if(a<=-4)(a=0)
    //     else if(a == 0)(a = 1);
    // });

    $("#index-left-btn").click(function(e){

        e.preventDefault();

        $("#index-video video").eq(0).animate({
            marginLeft : a*"-100"+"%"
        },1000);

        a++;

        if(a == 4)(a = 0);
        console.log(a);
    });



    $("#index-right-btn").click(function(e){

        e.preventDefault();

        $("#index-video video").eq(0).animate({
            marginLeft : a*"100"+"%"
        },1000);
        
        a--;

        if(a == -4)(a = 0)
        console.log(a);
    });
});

