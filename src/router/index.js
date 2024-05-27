import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        title: 'Homepage'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta:{
        title: 'About'
      }
    },
    {
      path: '/job/:position/:id',
      name: 'job',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Job.vue'),
      meta:{
        title: 'Job'
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  // we wanted to use the store here`
  if(to.meta.title)
  {
    if(to.params.position)
      {
        document.title = `${to.params.position} - ${to.meta.title}`
      }else{
        window.document.title = to.meta.title;
      }
    
  }
 next()
})

export default router
