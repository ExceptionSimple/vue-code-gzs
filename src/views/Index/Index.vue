<script setup>
import BigScreenContent from './components/BigScreenContent.vue';
import FeatureCard from './components/FeatureCard.vue';
import RecentActivities from './components/RecentActivities.vue';
import HonorStatistics from './components/HonorStatistics.vue';
import JoinUs from './components/JoinUs.vue';

const featureData = [
  { title: '技术学习', icon: 'icon-code', desc: '系统化的编程培训课程，从基础到进阶，助你快速成长' },
  { title: '团队协作', icon: 'icon-tuanduixiezuo', desc: '与优秀的伙伴组队实践，在真实项目中提升工程能力' },
  { title: '丰富活动', icon: 'icon-rili', desc: '定期举办技术讲座、黑客马拉松和编程竞赛等精彩活动' }
]


</script>

<template>
  <big-screen-content />
  <div class="feature-group container">
    <feature-card v-for="x in featureData" :key="x" :data="x" />
  </div>
  <recent-activities class="container" />
  <honor-statistics class="container" />
  <join-us />
</template>

<style scoped>
.feature-group {
  display: flex;
  justify-content: space-between;
}
</style>
