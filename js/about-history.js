jQuery(document).ready(function(){
    $("#up_btn").click(function(e){
        e.preventDefault;
        $(".main ul").animate({top : "-33px"},500)
        $(this).fadeOut();
        $("#down_btn").fadeIn();
    });

    $("#down_btn").click(function(e){
        e.preventDefault;
        $(".main ul").animate({top : "-550px"},500)
        $(this).fadeOut();
        $("#up_btn").fadeIn().animate({opacity : "1"},500);
    });
});