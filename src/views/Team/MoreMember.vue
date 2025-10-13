<script setup>
import MemberItem from './components/MemberItem.vue';

</script>

<template>
  <div class="header container">
    <div class="icon">
      <span class="iconfont">&#xe607;</span>
    </div>
    <div>
      <div class="title">全部成员</div>
      <div class="total">共 10 位成员</div>
    </div>
  </div>
  <div class="teacher-group container">
    <member-item v-for="x in 10" :key="x" />
  </div>
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
  font-size: 2rem;
  font-weight: 700;
  background-image: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.header .total {
  color: var(--normal-text);
  font-size: 1.3rem;
}
.teacher-group {
  margin-top: 50px;
  display: grid;
  grid-template-columns: auto auto auto auto ;
}

</style>
