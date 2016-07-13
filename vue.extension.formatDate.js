/**
 * Created by kaicui on 16/7/13.
 */


//时间相关常量
var MIN= 60,
    HOUR = 60*60,
    DAY = 24 * 60*60;

/**
 * 按照以下规则显示时间:
 *
 * 计算date与当前时间的差距:
 *
 * 1.大于1天,则显示"x天前"
 * 2.[1小时,1天),则显示"x小时前"
 * 3.[1分钟,1小时),则显示"x分钟前"
 * 4.[0,1分钟),则显示"刚刚"
 */
Vue.filter('formatDate', function (date,mode) {
    if(date){
        if(date.constructor !== Date){
            date = new Date(date);
        }
        var ret ="";
        
        switch (mode){
            case "elapsed":

                var now = new Date();
                var dist = parseInt( (now - date)/1000 );

                if(dist>=DAY){
                    ret = [ parseInt(dist/DAY) ,'天前'].join('')
                }else  if(dist>=HOUR){
                    ret = [ parseInt(dist/HOUR) ,'小时前'].join('')
                }else if(dist>=MIN){
                    ret = [ parseInt(dist/MIN) ,'分钟前'].join('')
                }else {
                    ret = "刚刚"
                }
                break;
            default:
                ret=date.toLocaleTimeString();
                break;
        }
        return ret;
    }else {
        return "";
    }
});
