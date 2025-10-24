<script setup>
import { ref } from 'vue';
import TeacherItem from './components/TeacherItem.vue';
import CardDesc from './components/CardDesc.vue';

import { getTeacherListAPI } from '@/api/teacher';

const data = ref({
  page: 1,
  pageSize: 10,
  total: 0
})

const teacherList = ref([])

getTeacherListAPI(data.value).then((resp) => {
  teacherList.value = resp.data.records
  data.value.total = resp.data.total
})

const hideFlag = ref(true)

const tid = ref(null)
const showDesc = (e, id) => {
  tid.value = id
  e.stopPropagation()
  hideFlag.value = false
}
const closeCardDesc = () => {
  hideFlag.value = true
}

</script>

<template>
  <div class="header container">
    <div class="icon">
      <span class="iconfont">&#xe607;</span>
    </div>
    <div>
      <div class="title">全部指导老师</div>
      <div class="total">共 {{ data.total }} 位老师</div>
    </div>
  </div>
  <div class="teacher-group container">
    <teacher-item v-for="item in teacherList" :key="item.id" :data="item" @click="showDesc($event, item.id)" />
  </div>
  <card-desc :hide="hideFlag" @close="closeCardDesc" :id="tid" type="TEACHER" />
</template>

<style scoped>
.header {
  margin-top: 50px;
  display: flex;
  gap: 10px;
  align-items: center;
}
.header .icon {
  width: 50px;
  height: 50px;
  background-image: var(--gradient-primary);
  color: white;
  text-align: center;
  line-height: 50px;
  border-radius: 10px;
}
.header .iconfont {
  font-size: 25px;
}
.header .title {
  font-size: .6rem;
  font-weight: 700;
  background-image: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.header .total {
  color: var(--normal-text);
  font-size: .3rem;
}
.teacher-group {
  margin-top: 50px;
  display: grid;
  grid-template-columns: auto auto;
}

</style>
