<script setup>
const props = defineProps({
  data: Object
})

</script>

<template>
  <Card class="feature-card">
    <div>
      <span :class="['iconfont', data.icon]"></span>
    </div>
    <h3>{{ data.title }}</h3>
    <p>{{ data.desc }}</p>
  </Card>
</template>

<style scoped>
.feature-card {
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  flex: 1;
  box-shadow: none;
}
.feature-card h3 {
  font-size: 25px;
  margin: 20px 0;
}
.feature-card p {
  font-size: 16px;
}
.feature-card .iconfont {
  font-size: 50px;
}
</style>
