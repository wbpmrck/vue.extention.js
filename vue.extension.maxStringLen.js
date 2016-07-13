/**
 * Created by kaicui on 16/7/13.
 */

/**
 * filter:替换过长的字符.
 * maxLength:最大显示字符数
 * tail:要接在最后的字符,比如...
 */
Vue.filter('maxStringLen', function (str,maxLength,tail) {
    if(str!==undefined && str.length > maxLength){
        return [str.substr(0,maxLength),tail].join('')
    }else{
        return str;
    }
})