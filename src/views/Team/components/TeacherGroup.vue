<script setup>
import router from '@/router';
import TeacherItem from './TeacherItem.vue';
</script>

<template>
  <div class="teacher-group">
    <div class="header">
      <h2> <span class="iconfont">&#xe607;</span> 指导老师</h2>
      <el-button @click="router.push('/more_teacher')">查看所有老师</el-button>
    </div>
    <div class="item-group">
      <teacher-item />
      <teacher-item />
    </div>
  </div>
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
