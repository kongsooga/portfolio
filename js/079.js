$(function () {
    //item 한테 마우스 올렸을 때 실행
    //마우스 올린 순서값에 따라
    //img의 파일명을 변경 = 순서값
    let cont01Img = $('.cont_list > figure > img');
    let item = $('.item');
    let h4 = $('h4');

    item.mouseenter(function () {
        //cont01Img.attr('src','img/002.jpg')
        //파일명은 this의 index값에 맞춰 변경
        console.log($(this).index())
        let imgIndex = $(this).index() + 1;
        cont01Img.attr('src', 'img/00' + imgIndex + '.jpg');//고정값

        h4.css({
            'background-color': '#fff'
        })
        h4.eq($(this).index()).css({
            'background-color': '#ffcc00'
        })
    })
})//jquery end