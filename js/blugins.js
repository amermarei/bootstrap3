$(document).ready(function()
{
$("body").niceScroll({
    cursorcolor:"#26418f",
    cursorborder:"none"
});
$(".gear-tool").click(function()
{
    $(".color-option").toggle();
});

var colorLi = $(".color-option ul li");

colorLi 
.eq(0).css("backgroundColor","#26418F").end()
.eq(1).css("backgroundColor","black");
colorLi.click(function()
{
    $("link[href*='mode']").attr("href", $(this).attr("data-value"));
});

});

$(window).load(function()
{
    $(".overlay-loading,.overlay-loading sk-chase").fadeOut(4000);
});
