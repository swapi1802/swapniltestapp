// main.js

import Vue from 'vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './components/App.vue';
import Edit from './components/Edit.vue';
import List from './components/List.vue';
import Default from './components/ExampleComponent.vue';

const Create = () => import('./components/Create.vue' /* webpackChunkName: "resource/js/components/welcome" */) 

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const routes = [
  {
    name: 'Default',
    path: '/',
    component: Default
  },
  {
    name: 'Create',
    path: '/create',
    component: Create
  },
  {
    name: 'Edit',
    path: '/edit',
    component: Edit
  },
  {
    name: 'List',
    path: '/list',
    component: List
  },
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue({
  render: h => h(App),
  router
}).$mount('#app')