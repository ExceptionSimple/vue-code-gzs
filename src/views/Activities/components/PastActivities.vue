<script setup>
import { ref } from 'vue';
import { finishedAPI } from '@/api/activities';

const data = ref([])

finishedAPI().then(resp => {
  if(resp.code !== 1) return
  data.value = resp.data
})

const toURL = (url) => {
  location.href = url
}

</script>

<template>
  <div class="coming-soon">
    <div class="header">
      <h2> <span class="iconfont">&#xe620;</span> 往期活动</h2>
    </div>
    <div class="activities-group">
      <div class="item" v-for="item in data" :key="item.id" @click="toURL(item.url)">
        <div class="top">
          <el-tag effect="light" round>培训</el-tag>
           <span class="iconfont finished">&#xe70d;</span>
        </div>
        <div class="middle">
          <h3 class="title">{{ item.title }}</h3>
          <div class="desc">{{ item.desc }}</div>
        </div>
        <ul>
          <li><span class="iconfont">&#xe620;</span> {{ item.datetime }} </li>
          <li><span class="iconfont">&#xe65b;</span> 已报名 xx 人 </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  margin-bottom: 30px;
}
.header h2 {
  font-size: 30px;
}
.header .el-button {
  background-color: transparent;
}
.header .iconfont {
  font-size: 30px;
  color: var(--theme-color);
}
.activities-group {
  display: grid;
  grid-template-columns: auto auto auto auto;
}
.item {
  margin: 10px;
  padding: 20px;
  background-color: #fff;
  max-width: 300px;
  cursor: pointer;
  transition: all .5s ease;
  border-radius: 10px;
  border: 1px solid #ccc;
  position: relative;
}
.item .finished {
  position: absolute;
  font-size: 99px;
  top: 5px;
  right: 10px;
  color: #ff5454 !important;
}
.item:hover {
  transform: translateY(-15px);
  box-shadow: 0 0 20px 3px rgba(0,0,0, .13);
  border-color: transparent;
}
.item .top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.item .middle .title {
  font-size: 20px;
}
.item .middle .desc {
  padding: 15px 0;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  color: var(--normal-text);
  font-size: 14px;
}
.item .iconfont {
  color: var(--theme-color);
}
ul > li {
  font-size: 16px;
}
ul .iconfont {
  font-size: 16px;
}
</style>

