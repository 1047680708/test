// 自适应网站
function setRem(){
    //设计视口
    let uiSize=750;
    //设备视口尺寸
    let winSize=document.documentElement.clientWidth;
    let app=document.getElementById('app');
    if (uiSize<winSize) {
        //如果设计视口小于设备视口，则只显示750的设计视口大小
        app.style.width=uiSize+'px';
        app.style.margin='0 auto'
        app.style.border='1px solid black'
        return
    }
    //如果视口尺寸小于设计尺寸，则让整个页面等比例缩放
    document.documentElement.style.fontSize=winSize/uiSize*100+'px';
    //如果有边框，去除，app的宽度此时就是等于视口宽度100%
    app.style.width=winSize+'px';
    app.style.border='none'
}

onload=function(){
    setRem();
    new Swiper('.swiper-container',{
      direction:'horizontal',
      loop:true,
    //   autoplay: {
    //     delay: 2000
    //   },
      pagination: {
        el: '.swiper-pagination',
      },
      effect:'flip'
    })
  }

onresize=function(){
    setRem();
}