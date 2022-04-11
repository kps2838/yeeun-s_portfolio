$(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var about_scroll = $('#about').offset().top;
        var works_scroll = $('#works').offset().top;
        if (scroll < about_scroll) {
            $("#gnb > ul > li > a").css("color" , "#fff");
            $("#gnb .border").css("background-color" , "#fff");
          }

        if (scroll >= about_scroll && scroll < works_scroll) {
          $("#gnb > ul > li > a").css("color" , "#252C65");
          $("#gnb .border").css("background-color" , "#252C65");
        }

        if (scroll >= works_scroll) {
            $("#gnb > ul > li > a").css("color" , "#fff");
            $("#gnb .border").css("background-color" , "#fff");
          }
      })
})