import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/Layout.vue'
import Index from '@/views/Index/Index.vue'
import AboutMe from '@/views/AboutMe/AboutMe.vue'
import Activities from '@/views/Activities/Activities.vue'
import Team from '@/views/Team/Team.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        { path: '', component: Index },
        { path: 'team', component: Team },
        { path: 'activities', component: Activities },
        { path: 'aboutMe', component: AboutMe },
      ]
    }
  ],
})

export default router
