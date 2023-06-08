//네비게이션 시작 
$(document).ready(function () {
    $('.sub').hide(); ''

    $('#nav>ul>li').hover(
        function () {
            $(this)
                .find('.sub')
                .show()
                .css({ opacity: '0', height: '0px' })
                .animate({ opacity: '1', height: '220px' })
        },
        function () {
            $(this).find('.sub').hide();
        }
    );

    $('#nav .sub li').hover(
        function () {
            $(this).addClass('act');
        },
        function () {
            $(this).removeClass('act');
        }
    )

});
// 네비게이션 끝
// -----------------------------------------------------------------



$(document).ready(function () {
    var slideCount = $('#company .company_img ul li').length;
    var currentIndex = 0;

    function slideAnimation() {
        $('#company .company_img ul li').eq(currentIndex).css('opacity', 1).siblings().css('opacity', 0);
    }

    function slideNext() {
        currentIndex++;
        if (currentIndex >= slideCount) {
            currentIndex = 0;
        }
        slideAnimation();
    }

    setInterval(function () {
        slideNext();
    }, 5000);
});

// 
$(document).ready(function() {
    var slideCount = $('.color_text').length;
    var currentIndex = 0;
  
    function slideAnimation() {
      $('.color_text2').eq(currentIndex).animate({
        top: '-430px',
        opacity: 1
      }, 500).siblings().css({
        top: '0px',
        opacity: 1
      });
    }
  
    function slideNext() {
      currentIndex++;
      if (currentIndex >= slideCount) {
        currentIndex = 0;
      }
      slideAnimation();
    }
  
    $('.animateButton').click(function() {
      slideNext();
    });
  });
  //회사 연혁
 
  $(document).ready(function(){
    var screen01Num =1;
    $(window).scroll(function(){
      var scrollTop =$(document).scrollTop();
      if(scrollTop>2000 && screen01Num ==1){
        screen01Num =0;
        $('.boxArea').stop().delay(100).css({top:'-900px'}).animate({top:'300px'},5000)}
      else if(scrollTop<1950 && screen01Num ==0){
        screen01Num =1;
         $('.boxArea').stop().delay(700).css({top:'300px'}).animate({top:'-900px'},5000)

      }
    })



  })