/**
 * Created by GreetingText on 2016/12/1.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.js';

// 告诉Vue要使用 router

Vue.use(VueRouter);

/* eslint-disable no-new */
// 实例化router对象
const router = new VueRouter({
  // 路由模式
  mode: 'hash',
  // 挂载路由集合
  routes,
  // 链接激活时的class
  linkActiveClass: 'active'
});

// 导出router对象
export default router;
