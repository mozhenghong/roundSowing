$(function(){
    var index = 0
    var $num = $('.images img')
    var timeId = null
    $('.buttons button').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        index = $(this).index();
        var position = index*(-300)+'px'
        $('.images').css('transform','translateX('+position+')')
        
    })
    $('.window').hover(function(){
        if(timeId){
            clearInterval(timeId)
        }
    },function(){
         timeId = setInterval(function(){
            position = index*(-300)+'px'
            $('.images').css('transform','translateX('+position+')')
            index++
            if(index===$num.length){
                index =0
            }
        },2000)
    })
})
