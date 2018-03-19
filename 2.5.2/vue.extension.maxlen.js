/**
 * Created by kaicui on 2018年03月19日
 * 1、使用v-max-len="some number" 进行绑定
 *
 * 2018年03月19日：改写为适合2.5.2+版本的vue
 */
Vue.directive('max-len', {
    twoWay: true,
    bind: function (el, binding, vnode) {
        //当DOM获取焦点，更新vm
        el._keydown_handler= function (e) {
            // if (/\d/.test(String.fromCharCode(e.keyCode)) && el.value.length == binding.value) {
            if (e.keyCode != 8 && e.keyCode != 46 && el.value.length == binding.value) {
                return false
            }
            return true
        }
        el.onkeydown = el._keydown_handler;
    },
    update: function (el, binding, vnode) {
    },
    unbind: function (el, binding, vnode) {
        el.onkeydown = null;
    }
})

