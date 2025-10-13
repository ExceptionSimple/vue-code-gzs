<script setup>
import BigScreenContent from './components/BigScreenContent.vue';
import FeatureCard from './components/FeatureCard.vue';
import RecentActivities from './components/RecentActivities.vue';
import HonorStatistics from './components/HonorStatistics.vue';

</script>

<template>
  <big-screen-content />
  <div class="feature-group container">
    <feature-card v-for="x in 3" :key="x" />
  </div>
  <recent-activities class="container" />
  <honor-statistics class="container" />
</template>

<style scoped>
.feature-group {
  display: flex;
  justify-content: space-between;
}
</style>
