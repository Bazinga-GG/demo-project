import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'

/*region 解决vue-router^3.0.1当前页跳转到当前页NavigationDuplicated bug*/
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
/*endregion*/

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
