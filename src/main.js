import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from '@/components/goods/goods';
import ratings from '@/components/ratings/ratings';
import seller from '@/components/seller/seller';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {path:'/goods', component: goods},
  {path:'/ratings', component: ratings},
  {path:'/seller', component: seller}
];

let router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});


//http://vuejssellapp.t.imooc.io/#!/ratings
//http://router.vuejs.org/zh-cn/essentials/dynamic-matching.html
