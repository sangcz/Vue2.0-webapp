import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router.js';

import 'common/stylus/index.styl';

Vue.use(VueResource);

/* eslint-disable no-new */

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

// router.push({path: '/goods'});
