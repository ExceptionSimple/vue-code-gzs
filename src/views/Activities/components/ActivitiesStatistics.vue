<script setup>
import { ref } from 'vue'

const data = ref([
  { title: '活动举办', total: '100+' },
  { title: '参与人数', total: '200+' },
  { title: '合作企业', total: '5' },
])

</script>

<template>
  <div class="honor">
    <div class="item" v-for="item in data" :key="item.title" :class="{ cyrs: item.title == '参与人数' }">
      <div class="total">{{ item.total }}</div>
      <div class="title">{{ item.title }}</div>
    </div>
  </div>
</template>

<style scoped>
.honor {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 100px 0;
}
.honor .item {
  text-align: center;
}
.honor .item .total {
  font-size: 2rem;
  font-weight: 700;
  color: var(--theme-color);
  margin-bottom: 10px;
}
.honor .item .title {
  color: var(--normal-text);
}
.honor .item.cyrs .total {
  color: #a15af2;
}
</style>
