$(function(){
    var index = 0
    var $num = $('.images img')
    var timeId = null
    $('.buttons button').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        index = $(this).index();
        var position = index*(-300)+'px'
        $('.images').css('transform','translateX('+position+')')
        
    }).eq(0).click()
    $('.window').hover(function(){
        if(timeId){
            clearInterval(timeId)
        }
    },function(){
            timeId = setInterval(function(){
                position = index*(-300)+'px'
                $('.images').css('transform','translateX('+position+')')
                $('.buttons button').eq(index).addClass('active').siblings().removeClass('active')
                index++
                if(index===$num.length){
                    index =0
                }
            },2000)
         
    }).trigger('mouseleave')
})
