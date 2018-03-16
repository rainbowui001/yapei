$(function () {
    $(".contentHeadStep").click(function () {
        $(this).siblings().removeClass("step");
        $(this).addClass("step");
     
    })
})