/**
 * Created by kaicui on 16/7/13.
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
    bind: function () {
        var self = this;//save the this ref

        //当事件触发
        self._handler = function () {
            // 如果指令这样绑定 v-focus="a.b.c"
            // 它将用给定值设置 `vm.a.b.c`
            // self.set(!self.vm.$get(self.expression))
            self.set(!self._watcher.get())
        }
        // 准备工作

        //添加事件监听
        self.el.addEventListener(self.arg, self._handler)
    },
    update: function (newValue, oldValue) {
        var self = this;//save the this ref
    },
    unbind: function () {
        var self = this;//save the this ref
        //添加事件监听
        self.el.removeEventListener(self.arg, self._handler)
    }
});
