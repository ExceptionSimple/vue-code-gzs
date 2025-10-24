<script setup>
import { ref } from 'vue';
import router from '@/router';
import { recentActivitiesAPI } from '@/api/activities';

const options = [
  {
    value: 1,
    label: '培训',
  },
  {
    value: 2,
    label: '校企合作',
  },
]

const data = ref([])

recentActivitiesAPI().then((resp) => {
  if(resp.code !== 1) return
  data.value = resp.data
  data.value.forEach(e => {
    const t = options.find(x => x.value === e.type)
    e.type = t.label
  })
})

</script>

<template>
  <div class="recent-activities">
    <div class="header">
      <h2>近期活动</h2>
      <div>精彩不断，等你参与</div>
    </div>
    <div class="activities-group">
      <div class="item" v-for="item in data" :key="item">
        <h3>{{ item.title }}</h3>
        <el-tag type="primary" effect="plain" round>{{ item.type }}</el-tag>
        <div class="datetime">{{ item.datetime }}</div>
      </div>
    </div>
    <div style="text-align: right;">
      <el-button @click="router.push('/activities')">查看更多活动</el-button>
    </div>
  </div>
</template>

<style scoped>
.header div {
  font-size: 20px;
}
.recent-activities {
  padding: .8rem;
  /* --gradient-hero-blue: linear-gradient(135deg, hsl(217 91% 60% / .15) 0%, hsl(217 100% 65% / .1) 100%); */
  /* --gradient-hero-solid: linear-gradient(135deg, #4093FF 0%, #6BA8FF 100%); */
  /* background-color: var(--theme-color); */
  /* background-image: var(--gradient-hero-solid); */
  --gradient-hero: linear-gradient(135deg, hsl(217 91% 60% / .1) 0%, hsl(268 85% 65% / .1) 100%);
  background-image: var(--gradient-hero);
  box-sizing: border-box;
}
.recent-activities .header {
  text-align: center;
}
.recent-activities .header h2 {
  margin-bottom: 20px;
  font-size: 30px;
}
.recent-activities .header div {
  margin-bottom: 20px;
  color: var(--normal-text);
}

.recent-activities .activities-group {
  display: flex;
  justify-content: space-between;
}
.activities-group .item {
  flex: 1;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
}
.activities-group .item .el-tag {
  margin: 15px 0;
}
.activities-group .item h3 {
  font-size: 20px;
}
.activities-group .item .datetime {
  font-size: 16px;
}

.recent-activities .el-button {
  margin-top: 20px;
  margin-right: 10px;
  /* float: right; */
  width: 116px;
  background: transparent;
  color: var(--normal-text);
  border: 1px solid var(--normal-text);
}
</style>
