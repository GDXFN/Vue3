import Vue from 'vue'
import Router from 'vue-router'
import page1 from './views/Page1.vue'
import page2 from './views/Page2.vue'
import page3 from './views/Page3.vue'
import page4 from './views/Page4.vue'
Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/page1',
      name: 'page1',
      component: page1
    },
      {
          path: '/page2',
          name: 'page2',
          component: page2
      },
      {
          path: '/page3',
          name: 'page3',
          component: page3
      },
      {
          path: '/page4',
          name: 'page4',
          component: page4
      },
  ]
})
