import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/Layout.vue'
import Index from '@/views/Index/Index.vue'
import AboutMe from '@/views/AboutMe/AboutMe.vue'
import Activities from '@/views/Activities/Activities.vue'
import Team from '@/views/Team/Team.vue'
import MoreTeacher from '@/views/Team/MoreTeacher.vue'
import MoreMember from '@/views/Team/MoreMember.vue'
import CooperativeEnterprises from '@/views/CooperativeEnterprises/CooperativeEnterprises.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        { path: '', component: Index },
        { path: 'index', component: Index },
        { path: 'team', component: Team },
        { path: 'activities', component: Activities },
        { path: 'aboutMe', component: AboutMe },
        { path: 'more_teacher', component: MoreTeacher },
        { path: 'more_member', component: MoreMember },
        { path: 'cooperative_enterprises', component: CooperativeEnterprises },
      ]
    }
  ],
})

export default router
