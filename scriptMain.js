$(function(){
  var flag = 0;
  $('.menu').on("click",function () {
    if(flag === 0){
      $('.menuLine1').addClass('open1');
      $('.menuLine2').addClass('open2');
      $('.menuLine3').addClass('open3');
      $('.sideMenu').css({'clip-path':'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)','left':'0px'});
      flag = 1;
    }else{
      $('.menuLine1').removeClass('open1');
      $('.menuLine2').removeClass('open2');
      $('.menuLine3').removeClass('open3');
      $('.sideMenu').css({'clip-path':'polygon(0 0, 0% 0%, 100% 100%, 0% 100%)','left':'-800px'});
      flag = 0;
    };
  });
});

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  console.log(wScroll);
})
