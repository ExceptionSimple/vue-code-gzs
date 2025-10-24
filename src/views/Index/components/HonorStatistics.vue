<script setup>
import { ref } from 'vue'
import { getType1 } from '@/api/statistics';

const data = ref([
  { title: '核心成员', total: '100+' },
  { title: '活动举办', total: '100+' },
  { title: '获奖项目', total: '20+' },
  { title: '工作室历史', total: '5' },
])

getType1().then(resp => {
  if(resp.code !== 1) return
  data.value = resp.data
})

</script>

<template>
  <div class="honor">
    <div class="item" v-for="item in data" :key="item.title">
      <div class="total">{{ item.total }}</div>
      <div class="title">{{ item.title }}</div>
    </div>
  </div>
</template>

<style scoped>
.honor {
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 100px 0;
}
.honor .item {
  text-align: center;
}
.honor .item .total {
  font-size: .5rem;
  font-weight: 700;
  color: var(--theme-color);
  margin-bottom: 10px;
}
.honor .item .title {
  font-size: 16px;
  color: var(--normal-text);
}
</style>
