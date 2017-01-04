/**
 * Created by GreetingText on 2016/12/1.
 */
// 导入组件模块
import Goods from 'components/goods/goods.vue';
import Ratings from 'components/ratings/ratings.vue';
import Seller from 'components/seller/seller.vue';

// 编写路由集合

const routes = [
  {
    name: 'Goods',
    path: '/goods',
    component: Goods
  },
  {
    name: 'Ratings',
    path: '/ratings',
    component: Ratings
  },
  {
    name: 'Seller',
    path: '/seller',
    component: Seller
  }
];

// 导出路由集合

export default routes;
