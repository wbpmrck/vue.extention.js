/**
 * Created by kaicui on 16/7/13.
 * 1、使用v-focus="someVal" 进行绑定
 * 2、当input元素的焦点发生变化时，更新someVal.反之亦然
 *
 * 2018年03月19日：改写为适合2.5.2+版本的vue
 */
Vue.directive('focus', {
    twoWay: true,
    bind: function (el, binding, vnode) {
        var self = this;//save the this ref


        //当DOM获取焦点，更新vm
        el._focus_handler= function () {
            // 如果指令这样绑定 v-focus="a.b.c"
            // 它将用给定值设置 `vm.a.b.c`
            vnode.context[binding.expression] = true;
        }
        //当DOM失去焦点，更新vm
        el._blur_handler= function () {
            vnode.context[binding.expression] = false;
        }
        // 准备工作
        // 例如，添加事件处理器或只需要运行一次的高耗任务
        //console.log('focus bound!')
        el.addEventListener('focus', el._focus_handler)
        el.addEventListener('blur', el._blur_handler)
    },
    update: function (el, binding, vnode) {
        //根据当前vm值变化，来修改DOM的获取焦点状态
        var self = this;//save the this ref

        if(binding.value){
            el.focus();
        }else{
            el.blur();
        }
    },
    unbind: function (el, binding, vnode) {
        var self = this;//save the this ref

        // 清理工作
        // 例如，删除 bind() 添加的事件监听器
        //console.log('focus unbind!')
        el.removeEventListener('focus', el._focus_handler)
        el.removeEventListener('blur', el._blur_handler)
    }
})


