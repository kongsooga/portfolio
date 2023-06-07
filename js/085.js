$(function () {
    let tabMenu = $('.tab_menu li');
    let tabCont = $('.list');
    //a링크 막기
    //children() => 자식 선택자
    tabMenu.children('a').click(function (e) {
        //(e) => event 
        e.preventDefault();
        //preventDefault() => 이벤트 실행을 막아줌
        //a 태그의 링크 역할을 없앨때만 사용
    })
    tabMenu.click(function () {
        //1. 클릭한 메뉴의 순서에 따라
        //list가 나타남. 클래스명으로 제어
        tabCont.removeClass('on')
        tabCont.eq($(this).index()).addClass('on');
        //클릭되는 li의 스타일 변화
        //클래스명 on으로 제어 -> css파일에서 스타일 변화
        tabMenu.removeClass('on');
        $(this).addClass('on');

    })//tabMenu.click end

    //해상도에 따라 스크립트 적용
    $(window).resize(function () {
        //화면의 크기가 767보다 작을 때 실행
        if (window.outerWidth < 767) {
            //width값 구하기
            //width() : width값
            //innerWidth() : width + padding값
            //outerWidth() :  width + padding + border
            //outerWidth(true) : width + padding + border +margin
            tabMenu.mouseenter(function () {
                tabCont.removeClass('on')
                tabCont.eq($(this).index()).addClass('on');
                tabMenu.removeClass('on');
                $(this).addClass('on');
            });
        }
    }).resize()

})//jquery end