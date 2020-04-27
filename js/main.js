$(function () {
    //footer gotop btn
    $('#gotop').click(function (e) {
        $('html,body').animate({
            scrollTop: 0
        }, 800)
        e.preventDefault();
    })

    // animate inner link
    $('.animate__innerLink').click(function (e) {
        // 取得連結hash#後的id名，為JS元素
        let id = e.target.hash;
        // 取出該ID相對於視窗的距離，要加$()轉為JQ元素
        let idTop = $(id).offset().top
        $('html,body').animate({
            scrollTop: idTop,
        }, 800)
        e.preventDefault()
    })
})