<script setup>
import { ref } from 'vue';
import router from '@/router';
import TeacherItem from './TeacherItem.vue';
import CardDesc from './CardDesc.vue';

import { mainShowAPI } from '@/api/teacher';

const data = ref([])

mainShowAPI().then(resp => {
  if(resp.code !== 1) return
  data.value = resp.data
})

const hideFlag = ref(true)

const showDesc = (e, id) => {
  e.stopPropagation()
  hideFlag.value = false
}
const closeCardDesc = () => {
  hideFlag.value = true
}

</script>

<template>
  <div class="teacher-group container">
    <div class="header">
      <h2> <span class="iconfont">&#xe607;</span> 指导老师</h2>
      <el-button @click="router.push('/more_teacher')">查看所有老师</el-button>
    </div>
    <div class="item-group">
      <!-- <teacher-item @click="showDesc($event, 1)" /> -->
      <teacher-item v-for="item in data" :key="item.id" :data="item" />
    </div>
  </div>
  <card-desc :hide="hideFlag" @close="closeCardDesc" />
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
}
.header .el-button {
  background-color: transparent;
}
.header h2 {
  font-size: 0.4rem;
}
.header .iconfont {
  font-size: 0.4rem;
  color: var(--theme-color);
}
.item-group {
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 20px;
}
</style>
