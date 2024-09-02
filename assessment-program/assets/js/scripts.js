$(document).ready(function () {
  $(".faq .faq-list a").on("click", function () {
    $(this).children("i").removeClass("fa-plus").addClass("fa-minus");
    //$(this).children(i);
    //$(".second").removeClass("current");
    //$(".first").addClass("current");
  });
});
