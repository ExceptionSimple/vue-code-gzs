<script setup>
import { ref } from 'vue';
import EnterprisesItem from './components/EnterprisesItem.vue';
import { getEnterpriseListAPI } from '@/api/enterprise';

const enterpriseList = ref([])

const data = ref({
  page: 1,
  pageSize: 10,
  total: 0
})

getEnterpriseListAPI(data.value).then(resp => {
  if(resp.code !== 1) return
  enterpriseList.value = resp.data.records
  data.value.total = resp.data.total
})

</script>

<template>
  <div class="header">
    <div class="icon">
      <span class="iconfont">&#xe600;</span>
    </div>
    <div class="title">合作伙伴</div>
    <div class="sub-title">感谢各合作企业单位的支持与信任，共同推动技术创新与人才培养</div>
  </div>
  <div class="enterprises-group container">
    <enterprises-item v-for="item in enterpriseList" :key="item.id" :data="item" />
  </div>
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
</style>
