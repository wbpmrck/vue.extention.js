/**
 * Created by kaicui on 16/7/13.
 *
 * 隐藏字符串的中间部分,使用占位符代替.
 * 使用场景:
 * 1.遮盖手机号:13310012002 => 133****2002
 */


Vue.filter('hideString', function (str,keepHead,keepTail,replacer) {
    if(str){
        return [str.substr(0,keepHead),new Array(str.length-keepHead-keepTail+1).join(replacer),str.substr(str.length-keepTail,keepTail)].join('')
    }else{
        return str;
    }
})