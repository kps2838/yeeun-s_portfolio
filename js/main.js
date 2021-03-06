$(function(){
  let w = window.innerWidth;
  console.log(w);
  $(window).resize(function(){
      if(w=768) {
          location.reload()}
      else if(w=767) {
          location.reload()}
  })


  
  // 메뉴 색상 변경
    if(w >= 768){
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var about_scroll = $('#about').offset().top;
        var works_scroll = $('#works').offset().top;
        var contact_scroll = $('#contact').offset().top;

        if (scroll < about_scroll) {
            $("#gnb > ul > li > a").css("color" , "#fff");
            $("#gnb .border").css("background-color" , "#fff");
            $("#gnb > ul > li").eq(0).find('a').css('color','#ff0000')
          }



        if (scroll >= about_scroll && scroll < works_scroll) {
          $("#gnb > ul > li > a").css("color" , "#252C65");
          $("#gnb .border").css("background-color" , "#252C65");
          $("#gnb > ul > li").eq(1).find('a').css('color','#ff0000')
          var html = 85;
          var js = 60;
          var figma = 80;
          var photoshop = 60;
          var illustrator = 60;
        
          $('#about .html').circleProgress({
            value: html/100,
            startAngle:300,
            size:125,
            fill:"#252C65",
            animation:{
              duration:2000,
              easing:"swing"
            },
            lineCap : "butt",
            reverse:true,
            });
        
            $('#about .js').circleProgress({
              value: js/100,
              startAngle:300,
              size:125,
              fill:"#252C65",
              animation:{
                duration:2000,
                easing:"swing"
              },
              lineCap : "butt",
              reverse:true,
              });
        
              $('#about .figma').circleProgress({
                value: figma/100,
                startAngle:300,
                size:125,
                fill:"#252C65",
                animation:{
                  duration:2000,
                  easing:"swing"
                },
                lineCap : "butt",
                reverse:true,
                });
        
              $('#about .photoshop').circleProgress({
                value: photoshop/100,
                startAngle:300,
                size:125,
                fill:"#252C65",
                animation:{
                  duration:2000,
                  easing:"swing"
                },
                lineCap : "butt",
                reverse:true,
                });
        
                $('#about .illustrator').circleProgress({
                  value: illustrator/100,
                  startAngle:300,
                  size:125,
                  fill:"#252C65",
                  animation:{
                    duration:2000,
                    easing:"swing"
                  },
                  lineCap : "butt",
                  reverse:true,
                  });
        }

        if (scroll >= works_scroll && scroll < contact_scroll) {
            $("#gnb > ul > li > a").css("color" , "#fff");
            $("#gnb .border").css("background-color" , "#fff");
            $("#gnb > ul > li").eq(2).find('a').css('color','#ff0000')
          }

          if (scroll >= contact_scroll){
            $("#gnb > ul > li > a").css("color" , "#252C65");
            $("#gnb .border").css("background-color" , "#252C65");
            $("#gnb > ul > li").eq(3).find('a').css('color','#ff0000')
          }
      });

      // 섹션 스크롤
      var scroll_section = function(){
        $("section").each(function () {
          $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } else if (event.detail) delta = -event.detail / 3;
      
            var moveTop = null;
            if (delta < 0) {
                if ($(this).next() != undefined) {
                    moveTop = $(this).next().offset().top;
                }
            } else {
                if ($(this).prev() != undefined) {
                    moveTop = $(this).prev().offset().top;
                }
            }
      
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 100, complete: function () {
                }
      
            });
      
          });
        });
      }
      scroll_section();

    } else{
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var about_scroll = $('#about').offset().top;
        var works_scroll = $('#works').offset().top;
        var contact_scroll = $('#contact').offset().top;

        if (scroll < about_scroll) {
            $("#gnb > ul > li > a").css("color" , "#fff");
            $("#gnb .border").css("background-color" , "#fff");
            $("#gnb > ul > li").eq(0).find('a').css('color','#ff0000')
          }

        if (scroll >= about_scroll && scroll < works_scroll) {
          $("#gnb > ul > li > a").css("color" , "#252C65");
          $("#gnb .border").css("background-color" , "#252C65");
          $("#gnb > ul > li").eq(1).find('a').css('color','#ff0000')
          var html = 85;
          var js = 60;
          var figma = 80;
          var photoshop = 60;
          var illustrator = 60;
        
          $('#about .html').circleProgress({
            value: html/100,
            startAngle:300,
            size:w*0.15,
            fill:"#252C65",
            animation:{
              duration:2000,
              easing:"swing"
            },
            lineCap : "butt",
            reverse:true,
            });
        
            $('#about .js').circleProgress({
              value: js/100,
              startAngle:300,
              size:w*0.15,
              fill:"#252C65",
              animation:{
                duration:2000,
                easing:"swing"
              },
              lineCap : "butt",
              reverse:true,
              });
        
              $('#about .figma').circleProgress({
                value: figma/100,
                startAngle:300,
                size:w*0.15,
                fill:"#252C65",
                animation:{
                  duration:2000,
                  easing:"swing"
                },
                lineCap : "butt",
                reverse:true,
                });
        
              $('#about .photoshop').circleProgress({
                value: photoshop/100,
                startAngle:300,
                size:w*0.15,
                fill:"#252C65",
                animation:{
                  duration:2000,
                  easing:"swing"
                },
                lineCap : "butt",
                reverse:true,
                });
        
                $('#about .illustrator').circleProgress({
                  value: illustrator/100,
                  startAngle:300,
                  size:w*0.15,
                  fill:"#252C65",
                  animation:{
                    duration:2000,
                    easing:"swing"
                  },
                  lineCap : "butt",
                  reverse:true,
                  });
        }

        if (scroll >= works_scroll && scroll < contact_scroll) {
            $("#gnb > ul > li > a").css("color" , "#fff");
            $("#gnb .border").css("background-color" , "#fff");
            $("#gnb > ul > li").eq(2).find('a').css('color','#ff0000')
          }

          if (scroll >= contact_scroll){
            $("#gnb > ul > li > a").css("color" , "#252C65");
            $("#gnb .border").css("background-color" , "#252C65");
            $("#gnb > ul > li").eq(3).find('a').css('color','#ff0000')
          }
      })
    }

  




  // 팝업창

      $('#website .han .detail').click(function(){
        $('.workdetail .w_detail_01').addClass('on');
        $('#works .bg_black').addClass('on');
        $('section').off("mousewheel DOMMouseScroll");
      })

      $('#website .rbw .detail').click(function(){
        $('.workdetail .w_detail_02').addClass('on');
        $('#works .bg_black').addClass('on');
        $('section').off("mousewheel DOMMouseScroll");
      })

      $('#website .uplus .detail').click(function(){
        $('.workdetail .w_detail_03').addClass('on');
        $('#works .bg_black').addClass('on');
        $('section').off("mousewheel DOMMouseScroll");
      })

      $('#responsive .noroo .detail').click(function(){
        $('.workdetail .r_detail_01').addClass('on');
        $('#works .bg_black').addClass('on');
        $('section').off("mousewheel DOMMouseScroll");
      })

      $('#responsive .roche .detail').click(function(){
        $('.workdetail .r_detail_02').addClass('on');
        $('#works .bg_black').addClass('on');
        $('section').off("mousewheel DOMMouseScroll");
      })


      // 팝업창 닫기
      $(document).mouseup(function (e){
        var LayerPopup = $(".workdetail > div");
        if(LayerPopup.has(e.target).length === 0){
          LayerPopup.removeClass("on");
          $('#works .bg_black').removeClass('on');
          scroll_section();
        }
      })

  
})