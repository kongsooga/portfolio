$(function(){
//alert()
let menu = $('.tap_menu li');
let bar = $('.bar');
let item = $('.item');

menu.click(function(){
    //1. bar의 위치이동
    //menu가 가지는 위치값 만큼
    //bar의 left값으로 적용
    let moveLeft = $(this).position().left;
    //bar의 left 값을 moveLeft로 적용
    //animate, css
    bar.animate({
        'left' : moveLeft
    })

    //item에게 클래스명 제어
    //내가 클릭한 menu의 index순서값을 찾아서
    //그 순서에 맞춰
    //item에게 클래스명 추가
    //addClass(), removeClass()
    item.removeClass('on')
    item.eq($(this).index()).addClass('on')
    


});//menu.click

})//jquery end