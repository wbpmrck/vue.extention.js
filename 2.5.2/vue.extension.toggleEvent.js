/**
 * Created by kaicui on 16/7/13.
 *
 * PS:该写法适合2.5.2 以上版本
 */

/**
 * 自定义vue指令
 * 使用v-toggle-event:click="someVal"
 * 1.当元素上触发某个事件(:后面的参数，如click)的时候，会自动修改someVal的值为当前相反的值
 *
 * 暂缓实现的功能【未想到使用场景】：
 * 1.当改变someVal的值为相反值的时候，也会在元素上触发一次event指定的事件
 */
Vue.directive('toggle-event', {
    twoWay: true,
    bind: function (el, binding, vnode) {
        var self = this;//save the this ref

        //当事件触发
        el._toggle_event_handler = function () {
            // 如果指令这样绑定 v-focus="a.b.c"
            // 它将用给定值设置 `vm.a.b.c`
            // self.set(!self.vm.$get(self.expression))
            // vnode.context.$set(!vnode._watcher.get())
            // vnode.context.$set(!binding.value)
            vnode.context[binding.expression] = !vnode.context[binding.expression];
            // vnode.set(!binding.value + el.vm)
            // vnode.set(!binding.value)
        }
        // 准备工作

        //添加事件监听
        el.addEventListener(binding.arg, el._toggle_event_handler)
    },
    update: function (newValue, oldValue) {
        var self = this;//save the this ref
    },
    unbind: function (el, binding, vnode) {
        var self = this;//save the this ref
        //添加事件监听
        el.removeEventListener(binding.arg, el._toggle_event_handler)
    }
});
