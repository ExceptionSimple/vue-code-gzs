<script setup>
import router from '@/router';
import MemberItem from './MemberItem.vue';
</script>

<template>
  <div class="teacher-group">
    <div class="header">
      <h2> <span class="iconfont">&#xe600;</span> 工作室成员</h2>
      <el-button @click="router.push('/more_member')">查看所有成员</el-button>
    </div>
    <div class="item-group">
      <member-item v-for="x in 8" :key="x" />
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
  font-size: .4rem;
}
.header .iconfont {
  font-size: .4rem;
  color: var(--theme-color);
}
.item-group {
  display: grid;
  grid-template-columns: auto auto auto auto;
  margin-top: 20px;
}

</style>
