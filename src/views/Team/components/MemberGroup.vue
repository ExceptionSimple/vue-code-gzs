<script setup>
import { ref } from 'vue';
import router from '@/router';
import MemberItem from './MemberItem.vue';
import CardDesc from './CardDesc.vue';

import { mainShowAPI } from '@/api/student';

const data = ref([])

mainShowAPI().then(resp => {
  if(resp.code !== 1) return
  data.value = resp.data
})

const hideFlag = ref(true)

const sid = ref(null)
const showDesc = (e, id) => {
  sid.value = id
  e.stopPropagation()
  hideFlag.value = false
}
const closeCardDesc = () => {
  hideFlag.value = true
}

</script>

<template>
  <div class="member-group container">
    <div class="header">
      <h2> <span class="iconfont">&#xe600;</span> 工作室成员</h2>
      <el-button @click="router.push('/more_member')">查看所有成员</el-button>
    </div>
    <div class="item-group">
      <member-item v-for="item in data" :key="item.id" @click="showDesc($event, item.id)" :data="item" />
    </div>
  </div>
  <card-desc :hide="hideFlag" @close="closeCardDesc" :id="sid" type="STUDENT" />
</template>

<style scoped>
.member-group {
  margin: 50px auto;
}
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
