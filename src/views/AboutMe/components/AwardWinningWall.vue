<script setup>
</script>

<template>
  <div class="award-winning-wall">
    <h2 class="title">荣誉奖项</h2>
    <div class="group">
      <div class="item">
        <img src="@/assets/1.jpg" alt="xxxx" />
        <p><span class="iconfont">&#xe680;</span> 2025年10月13日</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.award-winning-wall .title {
  font-size: 1.8rem;
  margin-bottom: 20px;
  text-align: center;
}
.award-winning-wall .group {
  display: flex;
  justify-content: space-between;
}
.award-winning-wall .item {
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  max-width: 300px;
  background-color: #ccc;
}
</style>
