import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home';
import Form from './components/Form';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    }
  ]
});
