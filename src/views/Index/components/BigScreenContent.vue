<script setup>
</script>

<template>
  <div class="big-screen">
    <div class="container">
      <h1>智慧代码工作室</h1>
      <div class="sub-title">在这里，用代码改变世界，与志同道合的伙伴一起成长</div>
    </div>
  </div>
</template>

<style scoped>
.big-screen {
  height: 500px;
  /* background: linear-gradient(to bottom, #f0f6ff, #4093ff); */
  --gradient-hero: linear-gradient(135deg, hsl(217 91% 60% / .1) 0%, hsl(268 85% 65% / .1) 100%);
  background-image: var(--gradient-hero);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.big-screen h1 {
  font-size: 4.5rem;
  color: var(--theme-color);
}
.big-screen .sub-title {
  font-size: 1.5rem;
  color: var(--normal-text);
}
</style>
