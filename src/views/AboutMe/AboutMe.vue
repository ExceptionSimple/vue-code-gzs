<script setup>
import { ref } from 'vue';
import AwardWinningWall from './components/AwardWinningWall.vue';
import AboutMeInfo from './components/AboutMeInfo.vue';
import { getGzsByKeyAPI } from '@/api/baseInfo';

const data = ref({
  GZS_OUR_SOTRY: ''
})

getGzsByKeyAPI("GZS_OUR_STORY").then(resp => {
  if(resp.code !== 1) return
  data.value.GZS_OUR_SOTRY = resp.data.value
})
</script>

<template>
  <div class="header">
    <div class="icon">
      <span class="iconfont">&#xe600;</span>
    </div>
    <div class="title">关于我们</div>
    <div class="sub-title">致力于培养优秀程序员，推动校园技术文化发展</div>
  </div>
  <div class="we-story">
    <h2 class="title">我们的故事</h2>
    <div class="text" v-html="data.GZS_OUR_SOTRY"></div>
  </div>
  <AwardWinningWall style="margin-top: 50px;" />
  <AboutMeInfo style="margin-top: 50px; margin-bottom: 100px;" />
</template>

<style scoped>
.header {
  text-align: center;
  padding: 80px 0;
}
.header .icon {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  text-align: center;
  line-height: 50px;
  color: white;
  border-radius: 10px;
  padding: 10px;
  background-image: var(--gradient-primary);
}
.header .iconfont {
  font-size: 37px;
}
.header .title {
  font-weight: 700;
  font-size: .6rem;
  background-image: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 15px 0;
}
.header .sub-title {
  color: var(--normal-text);
  font-size: .3rem;
}
.we-story {
  text-align: center;
}
.we-story .title {
  font-size: .4rem;
  margin-bottom: 20px;
}
.we-story .text {
  color: var(--normal-text);
  line-height: .40rem;
  font-size: .25rem;
}
</style>
